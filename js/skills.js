$(document).ready(function() {
    var skills = [
        { name: "Java", progress: 80, remaining: 20 },
        { name: "Python", progress: 88, remaining: 12 },
        { name: "HTML", progress: 95, remaining: 5 },
        { name: "HTML", progress: 49, remaining: 51 },
        { name: "CSS", progress: 65, remaining: 35 },
        { name: "JS", progress: 70, remaining: 30 },
    ];

    var chartConfig = {
        type: 'doughnut',
        data: {
            labels: ['Progress', 'Remaining'],
            datasets: [{
                data: [0, 100], // Initial values, will be updated dynamically
                backgroundColor: ['#36a2eb', '#eaeaea'], // Adjust the colors as needed
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutoutPercentage: 80, // Adjust the cutout percentage as needed
            animation: {
                animateRotate: true,
                animateScale: true
            },
            legend: {
                display: false
            }
        }
    };

    var skillsGrid = document.querySelector('.skills-grid');
    skills.forEach(function(skill, index) {
        var skillItem = document.createElement('div');
        skillItem.className = 'skill-item';

        var skillName = document.createElement('div');
        skillName.className = 'skill-name';
        skillName.textContent = skill.name;

        var canvas = document.createElement('canvas');
        canvas.id = 'skillChart' + (index + 1);

        skillItem.appendChild(skillName);
        skillItem.appendChild(canvas);
        skillsGrid.appendChild(skillItem);

        var chartCtx = canvas.getContext('2d');
        var skillChart = new Chart(chartCtx, chartConfig);

        // Update chart data with skill values
        var data = skillChart.data.datasets[0].data;
        data[0] = skill.progress;
        data[1] = skill.remaining;
        skillChart.update();
    });

    // Update chart size on window resize
    $(window).on('resize', function() {
        Chart.helpers.each(Chart.instances, function(instance) {
            instance.chart.resize();
        });
    });
});
