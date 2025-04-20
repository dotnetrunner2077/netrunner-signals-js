class TriangleSignalsDTO {
    constructor({ fecha, pair1, price1, pair2, price2, pair3, price3, maxProfit }) {
        this.fecha = new Date(fecha).toLocaleString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
          
        this.pair1 = pair1;
        this.price1 = price1.toFixed(6);
        this.pair2 = pair2;
        this.price2 = price2.toFixed(6);
        this.pair3 = pair3;
        this.price3 = price3.toFixed(6);
        this.maxProfit = `${(maxProfit).toFixed(4)}%`;
    }
}

let _apiUri = "https://api.agentrunner.netrunbot.com/";
let _endpoint = "dna180/signals";
let _token = "";
let _netrunner = "netrunbot.com";

async function GetSignals() {
    try {
        const response = await fetch(_apiUri + _endpoint, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + _token,
                'Content-Type': 'application/json',
                'netrunner-id': _netrunner
            }
        });

        const data = await response.json();
        const signals = data.map(item => new TriangleSignalsDTO(item));

        const container = document.getElementById('items');

        signals.forEach(signal => {
            const row = document.createElement('div');
            row.className = 'grid-row';
            Object.values(signal).forEach(value => {
                const cell = document.createElement('div');
                cell.className = 'grid-item';
                cell.textContent = value;
                row.appendChild(cell);
            });

            container.appendChild(row);
        });

    } catch (error) {
        console.error('Error al cargar señales:', error);
    }
}

GetSignals();

