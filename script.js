function updateMap() {
    console.log("update the map with real time data");
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                if (cases >= 500) {
                    col = "rgb(255, 0, 0)";
                } else {
                    col = `rgb(${cases}, 0, 0)`;
                }

                // if (cases <= 500) {
                //     // col = "rgb(255, 0, 0)";
                //     col = "yellow";
                // } else if (cases > 500 && cases <= 1000) {
                //     col = "green";
                // }else{
                //     col = `rgb(255, 0, 0)`;
                // }

                // Mark On the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: col,
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })
}
let interval = 2000;
setInterval(updateMap, interval);
// updateMap()