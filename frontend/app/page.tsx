// app/page.tsx
'use client'

import React from 'react'
import SearchBar from '@/components/SearchBar'
import UnitToggle from '@/components/UnitToggle'
import WeatherSummary from '@/components/WeatherSummary'
import ForecastCards from '@/components/ForecastCards'
import WindInfo from '@/components/WindInfo'
import HumidityInfo from '@/components/HumidityInfo'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">

      {/* LEFT PANEL */}
      <section className="md:w-1/3 w-full p-6 flex flex-col items-center justify-between bg-blue-100 dark:bg-blue-900">
        <WeatherSummary />
        <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">Nairobi, Kenya</div>
      </section>

      {/* RIGHT PANEL */}
      <section className="flex flex-col md:w-2/3 w-full p-6 space-y-6">

        {/* Search + Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <SearchBar />
          <UnitToggle />
        </div>

        {/* Forecast Cards */}
        <ForecastCards />

        {/* Wind + Humidity */}
        <div className="flex flex-col md:flex-row gap-4 mt-auto">
          <WindInfo />
          <HumidityInfo />
        </div>
      </section>