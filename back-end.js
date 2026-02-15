// Initial code outline from Fullstack/HW3
// Edits and additional code by Serena Glick, Winter 2026

const rawCache = {
  plants: null,
  zombies: null,
  areas: null,
};

async function getPlantsData() {
  try {
    let data;
    if (rawCache.plants) {
      data = rawCache.plants;
    } else {
      const response = await fetch("https://pvz-2-api.vercel.app/api/plants");
      data = await response.json();
      rawCache.plants = data;
    }
    return data;
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}

async function getZombiesData() {
  try {
    let data;
    if (rawCache.zombies) {
      data = rawCache.zombies;
    } else {
      const response = await fetch("https://pvz-2-api.vercel.app/api/zombies");
      data = await response.json();
      rawCache.zombies = data;
    }
    return data;
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}

async function getAreasData() {
  try {
    let data;
    if (rawCache.areas) {
      data = rawCache.areas;
    } else {
      const response = await fetch("https://pvz-2-api.vercel.app/api/areas");
      data = await response.json();
      rawCache.areas = data;
    }
    return data;
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}

module.exports = { getPlantsData, getZombiesData, getAreasData };
