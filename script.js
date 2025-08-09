const planetData = {
    sun: {
        name: "The Sun",
        distance: "Center of Solar System",
        diameter: "1,392,700 km",
        period: "N/A",
        temperature: "5,778 K (Surface)",
        description: "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit."
    },
    mercury: {
        name: "Mercury",
        distance: "57.9 million km (0.39 AU)",
        diameter: "4,879 km",
        period: "88 Earth days",
        temperature: "167°C (average)",
        description: "Mercury is the smallest planet in our solar system and the closest to the Sun. It has extreme temperature variations and no atmosphere to retain heat."
    },
    venus: {
        name: "Venus",
        distance: "108.2 million km (0.72 AU)",
        diameter: "12,104 km",
        period: "225 Earth days",
        temperature: "464°C",
        description: "Venus is the hottest planet in our solar system. Its thick, toxic atmosphere traps heat in a greenhouse effect, with surface temperatures hot enough to melt lead."
    },
    earth: {
        name: "Earth",
        distance: "149.6 million km (1.00 AU)",
        diameter: "12,756 km",
        period: "365.25 days",
        temperature: "15°C (average)",
        description: "Earth is the only known planet with life. It has liquid water, a protective atmosphere, and the perfect distance from the Sun to maintain temperatures suitable for life."
    },
    moon: {
        name: "The Moon (Luna)",
        distance: "384,400 km from Earth",
        diameter: "3,474 km",
        period: "27.3 Earth days",
        temperature: "-173°C to 127°C",
        description: "Earth's only natural satellite, the Moon influences our planet's tides and has been a source of wonder and inspiration throughout human history."
    },
    mars: {
        name: "Mars",
        distance: "227.9 million km (1.52 AU)",
        diameter: "6,792 km",
        period: "687 Earth days",
        temperature: "-65°C (average)",
        description: "Mars is known as the Red Planet due to iron oxide on its surface. It has the largest volcano in the solar system and evidence suggests it once had liquid water."
    },
    phobos: {
        name: "Phobos",
        distance: "9,376 km from Mars",
        diameter: "22.4 km",
        period: "7.6 hours",
        temperature: "-40°C",
        description: "Phobos is the larger and closer of Mars' two moons. It orbits so close to Mars that it completes an orbit in less than a Martian day."
    },
    deimos: {
        name: "Deimos",
        distance: "23,463 km from Mars",
        diameter: "12.4 km",
        period: "30.3 hours",
        temperature: "-40°C",
        description: "Deimos is the smaller and more distant of Mars' two moons. It's heavily cratered and thought to be a captured asteroid."
    },
    jupiter: {
        name: "Jupiter",
        distance: "778.5 million km (5.20 AU)",
        diameter: "142,984 km",
        period: "12 Earth years",
        temperature: "-110°C",
        description: "Jupiter is the largest planet in our solar system. It's a gas giant with a mass greater than all other planets combined."
    },
    io: {
        name: "Io",
        distance: "421,700 km from Jupiter",
        diameter: "3,643 km",
        period: "1.77 days",
        temperature: "-143°C",
        description: "Io is the most volcanically active body in the solar system, with over 400 active volcanoes caused by tidal heating from Jupiter."
    },
    europa: {
        name: "Europa",
        distance: "671,034 km from Jupiter",
        diameter: "3,121 km",
        period: "3.55 days",
        temperature: "-160°C",
        description: "Europa has a subsurface ocean beneath its icy crust, making it one of the most promising places to search for extraterrestrial life."
    },
    ganymede: {
        name: "Ganymede",
        distance: "1,070,412 km from Jupiter",
        diameter: "5,268 km",
        period: "7.15 days",
        temperature: "-180°C",
        description: "Ganymede is the largest moon in the solar system, even larger than Mercury. It has its own magnetic field and possibly a subsurface ocean."
    },
    callisto: {
        name: "Callisto",
        distance: "1,882,709 km from Jupiter",
        diameter: "4,821 km",
        period: "16.69 days",
        temperature: "-139°C",
        description: "Callisto is the most heavily cratered object in the solar system. It's composed of roughly equal amounts of rock and ice."
    },
    saturn: {
        name: "Saturn",
        distance: "1.43 billion km (9.58 AU)",
        diameter: "120,536 km",
        period: "29 Earth years",
        temperature: "-140°C",
        description: "Saturn is famous for its spectacular ring system. It's less dense than water and has over 80 known moons."
    },
    titan: {
        name: "Titan",
        distance: "1,221,830 km from Saturn",
        diameter: "5,149 km",
        period: "15.95 days",
        temperature: "-179°C",
        description: "Titan is Saturn's largest moon and has a thick atmosphere and liquid methane lakes on its surface, making it one of the most Earth-like worlds."
    },
    enceladus: {
        name: "Enceladus",
        distance: "238,020 km from Saturn",
        diameter: "504 km",
        period: "1.37 days",
        temperature: "-201°C",
        description: "Enceladus has geysers that shoot water ice from its south polar region, indicating a subsurface ocean that may harbor life."
    },
    uranus: {
        name: "Uranus",
        distance: "2.87 billion km (19.22 AU)",
        diameter: "51,118 km",
        period: "84 Earth years",
        temperature: "-195°C",
        description: "Uranus is unique because it rotates on its side. It's an ice giant with a faint ring system and 27 known moons."
    },
    titania: {
        name: "Titania",
        distance: "435,910 km from Uranus",
        diameter: "1,578 km",
        period: "8.71 days",
        temperature: "-203°C",
        description: "Titania is Uranus' largest moon, composed of roughly equal amounts of rock and ice with a heavily cratered surface."
    },
    oberon: {
        name: "Oberon",
        distance: "583,520 km from Uranus",
        diameter: "1,523 km",
        period: "13.46 days",
        temperature: "-203°C",
        description: "Oberon is the second-largest moon of Uranus, characterized by its heavily cratered, ancient surface."
    },
    neptune: {
        name: "Neptune",
        distance: "4.50 billion km (30.05 AU)",
        diameter: "49,528 km",
        period: "165 Earth years",
        temperature: "-200°C",
        description: "Neptune is the windiest planet in our solar system, with winds reaching up to 2,100 km/h. It's a deep blue ice giant."
    },
    triton: {
        name: "Triton",
        distance: "354,759 km from Neptune",
        diameter: "2,706 km",
        period: "5.88 days (retrograde)",
        temperature: "-235°C",
        description: "Triton is Neptune's largest moon and orbits backwards (retrograde). It's likely a captured Kuiper Belt object with geysers of nitrogen."
    }
};

class SolarSystemExplorer3D {
    constructor() {
        this.solarSystem = document.getElementById('solar-system');
        this.infoPanel = document.getElementById('info-panel');
        this.currentSpeed = 1;
        this.orbitsVisible = true;
        this.satellitesVisible = true;
        this.isDragging = false;
        this.lastX = 0;
        this.lastY = 0;
        this.rotationX = -15;
        this.rotationY = 0;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateSolarSystemTransform();
        this.toggleOrbits(); // Start with orbits visible
    }
    
    bindEvents() {
        // Planet and satellite click events
        document.querySelectorAll('.celestial-body[data-planet]').forEach(body => {
            body.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showPlanetInfo(body.dataset.planet);
            });
        });
        
        // Control buttons
        document.getElementById('reset-btn').addEventListener('click', () => this.resetView());
        document.getElementById('speed-btn').addEventListener('click', () => this.toggleSpeed());
        document.getElementById('orbit-btn').addEventListener('click', () => this.toggleOrbits());
        document.getElementById('satellites-btn').addEventListener('click', () => this.toggleSatellites());
        document.getElementById('close-btn').addEventListener('click', () => this.hideInfoPanel());
        
        // Mouse drag controls
        this.solarSystem.addEventListener('mousedown', (e) => this.startDrag(e));
        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('mouseup', () => this.endDrag());
        
        // Touch controls
        this.solarSystem.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.startDrag(e.touches[0]);
        });
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.drag(e.touches[0]);
        });
        document.addEventListener('touchend', () => this.endDrag());
        
        // Close info panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.infoPanel.contains(e.target) && !e.target.closest('.celestial-body[data-planet]')) {
                this.hideInfoPanel();
            }
        });
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            switch(e.key.toLowerCase()) {
                case 'escape':
                    this.hideInfoPanel();
                    break;
                case 'r':
                    this.resetView();
                    break;
                case ' ':
                    e.preventDefault();
                    this.toggleSpeed();
                    break;
                case 'o':
                    this.toggleOrbits();
                    break;
                case 's':
                    this.toggleSatellites();
                    break;
            }
        });
        
        // Prevent context menu on right click
        this.solarSystem.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    
    showPlanetInfo(planetKey) {
        const planet = planetData[planetKey];
        if (!planet) return;
        
        document.getElementById('planet-name').textContent = planet.name;
        document.getElementById('planet-distance').textContent = planet.distance;
        document.getElementById('planet-diameter').textContent = planet.diameter;
        document.getElementById('planet-period').textContent = planet.period;
        document.getElementById('planet-temp').textContent = planet.temperature;
        document.getElementById('planet-desc').textContent = planet.description;
        
        this.infoPanel.classList.add('active');
        
        // Add highlight effect to selected body
        document.querySelectorAll('.celestial-body').forEach(p => p.classList.remove('selected'));
        document.querySelector(`[data-planet="${planetKey}"]`).classList.add('selected');
    }
    
    hideInfoPanel() {
        this.infoPanel.classList.remove('active');
        document.querySelectorAll('.celestial-body').forEach(p => p.classList.remove('selected'));
    }
    
    startDrag(e) {
        this.isDragging = true;
        this.lastX = e.clientX || e.pageX;
        this.lastY = e.clientY || e.pageY;
        this.solarSystem.style.cursor = 'grabbing';
    }
    
    drag(e) {
        if (!this.isDragging) return;
        
        const currentX = e.clientX || e.pageX;
        const currentY = e.clientY || e.pageY;
        
        const deltaX = currentX - this.lastX;
        const deltaY = currentY - this.lastY;
        
        this.rotationY += deltaX * 0.5;
        this.rotationX = Math.max(-90, Math.min(90, this.rotationX - deltaY * 0.5));
        
        this.updateSolarSystemTransform();
        
        this.lastX = currentX;
        this.lastY = currentY;
    }
    
    endDrag() {
        this.isDragging = false;
        this.solarSystem.style.cursor = 'grab';
    }
    
    updateSolarSystemTransform() {
        this.solarSystem.style.transform = `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg)`;
    }
    
    resetView() {
        this.rotationX = -15;
        this.rotationY = 0;
        this.updateSolarSystemTransform();
        this.hideInfoPanel();
    }
    
    toggleSpeed() {
        const speedBtn = document.getElementById('speed-btn');
        const body = document.body;
        
        // Remove all speed classes
        body.classList.remove('speed-2x', 'speed-half');
        
        if (this.currentSpeed === 1) {
            this.currentSpeed = 2;
            speedBtn.textContent = 'Speed: 2x';
            body.classList.add('speed-2x');
        } else if (this.currentSpeed === 2) {
            this.currentSpeed = 0.5;
            speedBtn.textContent = 'Speed: 0.5x';
            body.classList.add('speed-half');
        } else {
            this.currentSpeed = 1;
            speedBtn.textContent = 'Speed: 1x';
        }
    }
    
    toggleOrbits() {
        this.orbitsVisible = !this.orbitsVisible;
        const orbits = document.querySelectorAll('.orbit');
        const btn = document.getElementById('orbit-btn');
        
        if (this.orbitsVisible) {
            orbits.forEach(orbit => orbit.classList.add('show-orbits'));
            btn.textContent = 'Hide Orbits';
        } else {
            orbits.forEach(orbit => orbit.classList.remove('show-orbits'));
            btn.textContent = 'Show Orbits';
        }
    }
    
    toggleSatellites() {
        this.satellitesVisible = !this.satellitesVisible;
        const body = document.body;
        const btn = document.getElementById('satellites-btn');
        
        if (this.satellitesVisible) {
            body.classList.remove('hide-satellites');
            btn.textContent = 'Hide Satellites';
        } else {
            body.classList.add('hide-satellites');
            btn.textContent = 'Show Satellites';
        }
    }
}

// Initialize the 3D Solar System Explorer when page loads
document.addEventListener('DOMContentLoaded', () => {
    new SolarSystemExplorer3D();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 1s ease-in-out';
    }, 100);
    
    // Add enhanced visual feedback
    document.querySelectorAll('.celestial-body').forEach(body => {
        body.addEventListener('mouseenter', function() {
            if (!this.classList.contains('sun')) {
                this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.8)';
            }
        });
        
        body.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});