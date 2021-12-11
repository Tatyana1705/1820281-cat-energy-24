const MOBILE = 'mobile';
const TABLET = 'tablet';
const DESKTOP = 'desktop';

const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1280;

const MAP_CENTER = { lat: 59.939, lng: 30.32 };
const MAP_MARKER_POINT = { lat: 59.938635, lng: 30.323118 };

const ICONS = {
  [MOBILE]: "../img/map-pin-mobile.png",
  [TABLET]: "../img/map-pin-tablet.png",
  [DESKTOP]: "../img/map-pin-tablet.png",
};

const getDevice = (width) => {
  if (width >= TABLET_WIDTH && width < DESKTOP_WIDTH) {
    return TABLET;
  }

  if (width >= DESKTOP_WIDTH) {
    return DESKTOP;
  }

  return MOBILE;
}

const getMarkerOptions = (device, map) => ({
    position: MAP_MARKER_POINT,
    map,
    icon: ICONS[device],
});

const getMapCetnter = (device) => device === DESKTOP ? MAP_CENTER : MAP_MARKER_POINT;

let current = getDevice(window.screen.width);

function initMap(device = current) {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: getMapCetnter(device),
    zoom: 17,
    disableDefaultUI: true,
  });

  new google.maps.Marker(getMarkerOptions(device, map));
}

window.addEventListener('resize', () => {
  const device = getDevice(window.screen.width);

  if (device !== current) {
    initMap(device);
    current = device;
  }
});
