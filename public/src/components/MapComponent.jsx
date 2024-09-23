import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import MetaTags from "./MetaTags";

// Define a custom icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [20, 30],
  iconAnchor: [10, 30],
  popupAnchor: [0, -30],
});

function Map() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Initialize the map
    const mapInstance = L.map("map", {
      center: [0, 0],
      zoom: 2,
      zoomControl: true,
      scrollWheelZoom: false,
      dragging: true,
      touchZoom: true,
      doubleClickZoom: true,
      maxBounds: [
        [-90, -180],
        [90, 180],
      ],
    });

    // Add dark-themed tile layer
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        subdomains: "abcd",
        maxZoom: 12,
        minZoom: 2,
        bounds: [
          [-90, -180],
          [90, 180],
        ],
      }
    ).addTo(mapInstance);

    setMap(mapInstance);

    // Cleanup function
    return () => {
      mapInstance.remove();
    };
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      (user) => {
        if (user && map) {
          const userId = user.uid;
          const userDocRef = doc(db, "users", userId);

          // Set up real-time listener for changes in user's document
          const unsubscribe = onSnapshot(
            userDocRef,
            (snapshot) => {
              console.log("Document snapshot received");
              const userData = snapshot.data();

              if (!userData) {
                console.log("No user data found");
                return;
              }

              const colleges = userData.colleges || [];
              console.log("Colleges data:", colleges);

              // Clear existing markers
              map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                  map.removeLayer(layer);
                }
              });

              // Add new markers
              colleges.forEach((college, index) => {
                if (college.locationLat && college.locationLon) {
                  console.log(`Adding marker for college ${index}:`, college);
                  L.marker([college.locationLat, college.locationLon], {
                    icon: customIcon,
                  })
                    .addTo(map)
                    .bindPopup(`<b>${college.schoolName}</b>`); // Use schoolName for the popup
                }
              });
            },
            (error) => {
              console.error("Error fetching document:", error);
            }
          );

          return () => {
            unsubscribe();
          };
        }
      },
      (error) => {
        console.error("Error with auth state change:", error);
      }
    );

    return () => {
      unsubscribeAuth();
    };
  }, [map]);

  return (
    <>
      <MetaTags
        title="Global University Map - UNIFYND"
        description="Explore universities around the world with UNIFYND’s interactive global map. Discover institutions of interest and find detailed information about their programs and locations."
        keywords="global map, universities, interactive map, university locations, study abroad, international education"
        url="https://unifynd.in/map"
        image="https://unifynd.in/path/to/map-component-image.jpg" // Update with actual image URL
      />{" "}
      <div id="map" style={{ height: "100%", width: "100%" }}></div>
    </>
  );
}

export default Map;
