/**
 * LA COUPE DES CONS 2026
 * ================================================
 * THE ONLY FILE YOU NEED TO EDIT
 *
 * 1. When you run the draw, update DRAW_SEED
 * 2. Each day, set revealed: true and fill assignments[]
 *    for that tier. Player order is always:
 *    [Atom, Ruby, Liv, Rio, Gemma, Lucy, KB, Brett, KP, Greg, Cyndi, Fred]
 * ================================================
 */

const DRAW_SEED = {
  seed: "Not yet generated",
  timestamp: "–"
};

const TIERS = {

  4: {
    name: "The Underdogs",
    revealDate: "Friday 5 June 2026",
    revealed: true,
    assignments: ["Qatar","South Africa","New Zealand","Cape Verde","Saudi Arabia","Curaçao","Bosnia & Herz.","Uzbekistan","Jordan","Iraq","Haiti","Ghana"]
  },

  3: {
    name: "The Contenders",
    revealDate: "Saturday 6 June 2026",
    revealed: false,
    assignments: []
  },

  2: {
    name: "The Challengers",
    revealDate: "Sunday 7 June 2026",
    revealed: false,
    assignments: []
  },

  1: {
    name: "The Favourites",
    revealDate: "Monday 8 June 2026",
    revealed: false,
    assignments: []
  }

};
