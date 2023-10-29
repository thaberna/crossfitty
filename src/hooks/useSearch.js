"use client";

import { useState } from "react";
import { searchWorkouts } from "@/services/serviceWorkouts";

export default function useSearch({ search }) {
  const [wods, setWods] = useState([]);

  const getDataSearch = async () => {
    const filteredWods = await searchWorkouts(search);
    if (filteredWods.length > 0) {
      setWods(filteredWods);
    }
  };

  return { wods, setWods, getDataSearch };
}
