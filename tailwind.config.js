/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      bigStone: "var(--big-stone)",
      beige: "var(--beige)",
      black: "var(--black)", // Hmmm.
      brownDerby: "var(--brown-derby)",
      concrete: "var(--concrete)",
      chathamsBlue: "var(--chathams-blue)",
      doveGrey: "var(--dove-grey)",
      emperor: "var(--emperor)",
      mineShaft: "var(--mine-shaft)",
      silver: "var(--silver)",
      tundora: "var(--tundora)",
      white: "var(--white)", // Hmmm.

      lightBgPrimaryColour: "var(--light-bg-primary-colour)",
      lightBgSecondaryColour: "var(--light-bg-secondary-colour)",
      lightBgPrimaryBackground: "var(--light-bg-primary-background)",
      lightBgSecondaryBackground: "var(--light-bg-secondary-background)",
      lightBgPrimaryBorder: "var(--light-bg-primary-border)",

      darkBgPrimaryColour: "var(--white)",
      darkBgFixedColour: "var(--white)",
      darkBgPrimaryBackground: "var(--black)",
      darkBgSecondaryBackground: "var(--mine-shaft)",
      darkBgTertiaryBackground: "var(--tundora)",
      darkBgQuaternaryBackground: "var(--emperor)",

      beigeBgBackground: "var(--beige-bg-background)",
      chathamsBlueBgBackground: "var(--chathams-blue-bg-background)",
    },
    extend: {},
  },
  plugins: [],
};
