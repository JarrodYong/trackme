$('#navbar').load('navbar.html');
$('#footer').load('footer.html');
var client = 'mqtt://vgsmseje:DDAiLF3Hb@soldier.cloudmqtt.com:17178';
const API_URL = 'https://218271795-sit-209.now.sh';
const response = $.get('http://localhost:3001/devices');
console.log(response);

$.get(`${API_URL}/devices`)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });
$.get(`${API_URL}/devices`)
    .then(response => {
        response.forEach(device => {
            $('#devices tbody').append(`
    <tr>
    <td>${device.user}</td>
    <td>${device.name}</td>
    </tr>`
            );
        });
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });

$('#add-device').on('click', () => {
    const name = $('#name').val();
    const user = $('#user').val();
    const sensorData = [];
    const body = {
        name,
        user,
        sensorData
    };
    $.post(`${API_URL}/devices`, body)
        .then(response => {
            location.href = '/';
        })
        .catch(error => {
            console.error(`Error: ${error}`);
        });
});

$('#send-command').on('click', function () {
    const command = $('#command').val();
    console.log(`command is: ${command}`);
});