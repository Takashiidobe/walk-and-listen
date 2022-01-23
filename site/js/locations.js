LOCATIONS = [
  {
    id: 1,
    name: "Providence, Rhode Island",
    videoId: "oulqfqvLlrQ",
    radio: {
      url: "http://live-aacplus-64.kexp.org/kexp64.aac",
      name: "KEXP",
    },
    startTime: 54,
  },
  {
    id: 2,
    name: "Boston, Massachusetts",
    videoId: "qby9toBxpt4",
    radio: {
      url: "http://live-aacplus-64.kexp.org/kexp64.aac",
      name: "KEXP",
    },
    startTime: 0,
  },
  {
    id: 3,
    name: "Seattle, Washington",
    videoId: "3EaCj-seAHM",
    radio: {
      url: "http://live-aacplus-64.kexp.org/kexp64.aac",
      name: "KEXP",
    },
    startTime: 25,
  },
  {
    id: 4,
    name: "Philadelphia, Pennsylvania",
    videoId: "KbwsQkHVJKM",
    radio: {
      url: "http://live-aacplus-64.kexp.org/kexp64.aac",
      name: "KEXP",
    },
    startTime: 165,
  },
  {
    id: 5,
    name: "Durham, North Carolina",
    videoId: "ZpUFoXEqdBs",
    radio: {
      url: "http://live-aacplus-64.kexp.org/kexp64.aac",
      name: "KEXP",
    },
    startTime: 0,
  },
  {
    id: 6,
    name: "Charleston, South Carolina",
    videoId: "gT_17bxGXoI",
    radio: {
      url: "http://live-aacplus-64.kexp.org/kexp64.aac",
      name: "KEXP",
    },
    startTime: 5,
  },
];

function chooseRandomLocation() {
  const availableLocations = LOCATIONS.filter(({ id }) =>
    state.currentLocation ? state.currentLocation.id !== id : true
  );

  return availableLocations[
    Math.floor(Math.random() * availableLocations.length)
  ];
}

function changeLocation(locationId) {
  if (state.currentLocation && locationId == state.currentLocation.id) return;

  changeLoadingState(true);

  const location = LOCATIONS.find((location) => location.id == locationId);

  state.currentLocation = location;

  changeLocationText(location.name);
  changeVideoSource(location.videoId);
  changeRadio(location.radio);
  toggleActiveClassOnLocation(location.id);
  playVideo(location);
}
