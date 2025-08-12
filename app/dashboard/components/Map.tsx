"use client";

import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MapProps {
  lng: number;
  lat: number;
  zoom: number;
  onMapClick?: (coords: { lng: number; lat: number }) => void;
}

const Map: React.FC<MapProps> = ({ lng, lat, zoom, onMapClick }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const marker = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL`,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    if (onMapClick) {
      map.current.on('click', (e) => {
        onMapClick({ lng: e.lngLat.lng, lat: e.lngLat.lat });
      });
    }

    marker.current = new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([lng, lat])
      .addTo(map.current);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.setCenter([lng, lat]);
    map.current.setZoom(zoom);
    if (marker.current) {
      marker.current.setLngLat([lng, lat]);
    }
  }, [lng, lat, zoom]);

  return (
    <div 
      ref={mapContainer} 
      style={{ width: '100%', height: '400px', borderRadius: '8px' }}
    />
  );
};

export default Map;
