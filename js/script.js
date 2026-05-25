// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Menú de navegación móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Gráfico dinámico para ODS usando Chart.js nativo vía CDN
    const ctx = document.getElementById('climateChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2100 (Prog.)', '2080 (Prog.)', '2060 (Prog.)', '2040', '2026 (Actual)'],
                datasets: [{
                    label: 'Proyección de Anomalía de Temperatura Global MDI (°C)',
                    data: [4.2, 3.1, 2.3, 1.8, 1.25],
                    backgroundColor: 'rgba(216, 74, 36, 0.1)',
                    borderColor: '#d84a24',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { title: { display: true, text: 'Incremento de temperatura (°C)' } }
                }
            }
        });
    }

    // Simulación de registro exitoso (unete.html)
    const joinForm = document.getElementById('joinForm');
    const successMsg = document.getElementById('successMessage');

    if (joinForm && successMsg) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            successMsg.style.display = 'block';
            joinForm.reset();
        });
    }
});
