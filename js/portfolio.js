document.addEventListener('DOMContentLoaded', function() {
    var timelineNodes = document.querySelectorAll('.timeline-node');

    function toggleActiveClass() {
        this.classList.toggle('active');
        timelineNodes.forEach(function(node) {
            if (node !== this) {
                node.classList.remove('active');
            }
        }, this);
    }

    function closeNodes(event) {
        var clickedElement = event.target;
        if (!clickedElement.classList.contains('timeline-node') && !clickedElement.closest('.timeline-node')) {
            timelineNodes.forEach(function(node) {
                node.classList.remove('active');
            });
        }
    }

    timelineNodes.forEach(function(node) {
        node.addEventListener('click', toggleActiveClass);
    });

    document.addEventListener('click', closeNodes);
});
