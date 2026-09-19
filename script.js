// Tailwind theme configuration
tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#F0FDFA',
              100: '#CCFBF1',
              200: '#99F6E4',
              300: '#5EEAD4',
              400: '#2DD4BF',
              500: '#14B8A6',
              600: '#0D9488',
              700: '#0F766E',
              800: '#115E59',
              900: '#134E48',
              dark: '#0B2328'
            },
            coral: {
              50: '#FEF2F2',
              100: '#FEE2E2',
              500: '#EF4444',
              600: '#DC2626',
              700: '#B91C1C'
            }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
          }
        }
      }
    };

// Application logic
/* =========================================================================
       FLEET DATA SPECIFICATION WITH PRODUCT IMAGES
       8 Transportation Modes
       ========================================================================= */
    const FLEET = [
      {
        id: 'walking',
        name: 'Walking',
        type: 'pedestrian',
        speed: 3.1,
        range: 30,
        iconSvg: `<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-iYxWpdeT0SOG3hMs9zyRgvD0mZDSPFSQev1N9NCb889SOI-qg-RfhSYP57Byibg2Sft1JOJ0dCf51n8riIOHhpjhi8zl2entlZIdIUfzKnCwHElGAqta4-nf3m_VESFVtAYrV7W7HfBW5Oxe76MapWQxARHID7hzdnBqedzdOXmuc5rZZ6n-_1ypd8wBxuVfe72D8XTfAjqUiILtS63TcTH5zU8fEidO100api-kAOt0z3iP-prqeyqFvQgwk8Hf" alt="Walking" class="w-full h-full object-contain drop-shadow-sm" />`
      },
      {
        id: 'evolve',
        name: 'Evolve Bamboo GTR 2-in-1',
        shortName: 'Evolve Bamboo GTR',
        type: 'electric-longboard',
        speed: 24,
        range: 31,
        iconSvg: `<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWa5uNpb4xem6m18ii_vt1DKFCbQFXEioa_doQKSO34fKBr630mN7S0kVlSmBFGJxkfCmEmTZUqQgMvI1m9QA5aMnH_wM2uLn-zd6kFu-4tR0rHZyZUaookwW5s2jYud2cNEkeQ-KVdZgrOrzb4jmoh5wN9KSGdeGbjDRksldKUQs9JCJ7-MgMjFYfNPxCe8Cqs8HJzthSfRatZ2pzQl2ImzzLbIDp4Hj_IVAtgDFX-0-OO9dQ03RBYSWTqU9bQCdp" alt="Evolve Bamboo GTR 2-in-1" class="w-full h-full object-contain drop-shadow-sm" />`
      },
      {
        id: 'onewheel',
        name: 'Onewheel GT',
        shortName: 'Onewheel GT',
        type: 'one-wheel',
        speed: 20,
        range: 32,
        iconSvg: `<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5z7bSC49rrMx4MLrtjutcXa-H0IpWDjEOf5YB930NwNhrBGPtF3do-_4NobC_xB3McWI9IbiEL35MPSPGPNVJUpTTDvJa95eDeCglWkuNXirRqZsIamSbtE0Fa2EA8xvw5vVRtfSQqI-2AD50GqPUC9pJ8SBjOJ9O84YZxrKQkAKPOeD_q95zcZ5gjSEnfy8GTqG5FAdqzHoSiBOSLSixFDYCFbm9_UKI9A_wDbjIfuQmv5rr2-Ax0H4RUHzXWJXZ" alt="Onewheel GT" class="w-full h-full object-contain drop-shadow-sm" />`
      },
      {
        id: 'razor',
        name: 'Razor E Prime III',
        shortName: 'Razor E Prime III',
        type: 'e-scooter',
        speed: 18,
        range: 15,
        iconSvg: `<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7FyN57SpjuOgRalOnpaH2oNdLaSofeJuh9XoI15oQaP3xWbFo1LPAazODg5ip5dHcrohKgHXx1bRu4-2NMUN9EC0mdaXL8PY1y_ylLGd_ykNkmrDZhhCBpsTf98eDF1ciEhCqf_gS64fNcfua6fJzSiije_ZPTqt1NiNZlKLkXaVTffw1Sza-2I9Ph6gDAIt1sHJkQ3MZICf0VaB7pVNPaJba81KELpz6rpw7iJgLkuyFKBGxxyLhlucBh_pS_wpz" alt="Razor E Prime III" class="w-full h-full object-contain drop-shadow-sm" />`
      },
      {
        id: 'mototec',
        name: 'MotoTec Electric Skateboard',
        shortName: 'MotoTec Skateboard',
        type: 'e-board',
        speed: 22,
        range: 10,
        iconSvg: `<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT3z7H3rpARFZPk66SkmODyBX3G_zXBp9YwbY-IB6mi8T1oH0ql666Vz7nIgEKkvsh5dpSlWnjpne0ScZIjK0AelHpT-ti0kOalJZUICoKj8S5mtwKAdXLy4tws65NhgT3NMqzzzmb-lpW-9l-a_JWviZ6-oaIC4cgR9BS07FO-KPoyXfbAaAJZQX4zK9jPsuJn36G5HjUXpDhSm6bKhEnMRNqTC7wxXeVe-iMEF7EZ49_2fy74MWUh9OoYqKCo8_k" alt="MotoTec Electric Skateboard" class="w-full h-full object-contain drop-shadow-sm" />`
      },
      {
        id: 'segway',
        name: 'Segway Ninebot S2',
        shortName: 'Segway Ninebot S2',
        type: 'self-balancing',
        speed: 11,
        range: 22,
        iconSvg: `<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5EhCy3Pp7e7jHheTa0t87NpPFulUAGqR1tt-27RsxuRJqa2vqCP3lrzPn4c3MIARyFb5k6lNWY2ZNnI8KB9P5avw_axERqxzVsuW0eE88LuCxNHgmQPhrHYs5dPFFZ3bKWWtpBfR4-y_XNt-pFl6gXKZQIA7amAJsf0X2raUOqDJJ2kdNNs8fJD4iqiwon7zJBhU9d_Q6q9GBSOZpwoVtI5Dkw-aIqZmbVuMhfXsD0J7K5S8BG8X8JV5lgBRRgs9O" alt="Segway Ninebot S2" class="w-full h-full object-contain drop-shadow-sm" />`
      },
      {
        id: 'unagi',
        name: 'Unagi Model One E500',
        shortName: 'Unagi Model One',
        type: 'dual-motor-scooter',
        speed: 19,
        range: 15.5,
        iconSvg: `<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5tWu30XrmA5HjEVykaoQDewOCxfcQ53AlcpJIc3Drh86g6oTX0fs8NQqgnDIEhAZck7ZMLh9jdyzbVGobi_D2oiSgSP50-_8Qbj481BbYXfJ3tR2lUYeB7yyfpqGqLwyl4SG1HYeEcK0_3CRRUsdj4tzt7MuW465noKsqmFV3N2SZ6MIX83SmbekyrYhyfOa3DtFArhMz7Q8YYY3Wr2cE80pycGYRBDoKr4Xaf-RTArsYRvQvU5ZhoMVuS4hTagYK" alt="Unagi Model One E500" class="w-full h-full object-contain drop-shadow-sm" />`
      },
      {
        id: 'inmotion',
        name: 'Inmotion V8S Electric Unicycle',
        shortName: 'Inmotion V8S Unicycle',
        type: 'euc',
        speed: 22,
        range: 47,
        iconSvg: `<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9pkjKFOOzpXDLxrU6tPrOJTwWoPoF7np71rdELxcixIejA5OHyRuvuu_ysKfyQghLfs3nf9YgYQCgf0718yMit6u0ofeoooa4MJODS8guJyHSKB2TlhJ9l55K1pyrhDndJRimtCASte49SXJaubxI7qHpomvbR_6WS-j7um9XGFx8sPEYPQENuAnBqYIzQbEnnl41O-3a6E3glzEHgucTdygv5B9mshgBYL8b_l9HWHpGsjD4TQjk5ZecQ0ySFXY9" alt="Inmotion V8S Electric Unicycle" class="w-full h-full object-contain drop-shadow-sm" />`
      }
    ];

    /* App State */
    let currentView = 'home';
    let mode1ConfirmedDistance = null;
    let mode1SelectedVehicleId = 'walking';
    let mode2ActiveDistance = 5;
    let activeCarouselIndex = 0;

    /* Helper: Format minutes into "XX h XX min" */
    function formatHoursMinutes(totalMinutes) {
      const roundedMinutes = Math.round(totalMinutes);
      const hours = Math.floor(roundedMinutes / 60);
      const mins = roundedMinutes % 60;
      if (hours === 0) return `${mins} min`;
      return `${hours} h ${mins} min`;
    }

    /* Helper: Calculate exact minutes */
    function calcMinutes(distance, speed) {
      if (speed <= 0) return 0;
      return (distance / speed) * 60;
    }

    /* Screen / View Switcher */
    function switchView(viewName) {
      currentView = viewName;

      const vHome = document.getElementById('viewHome');
      const vMode1 = document.getElementById('viewMode1');
      const vMode2 = document.getElementById('viewMode2');

      const tHome = document.getElementById('tabHome');
      const tMode1 = document.getElementById('tabMode1');
      const tMode2 = document.getElementById('tabMode2');

      // Hide all views first
      vHome.classList.add('hidden');
      vMode1.classList.add('hidden');
      vMode2.classList.add('hidden');

      // Reset tab colors
      [tHome, tMode1, tMode2].forEach(tab => {
        tab.classList.remove('text-brand-600', 'text-teal-600');
        tab.classList.add('text-slate-400');
      });

      if (viewName === 'home') {
        vHome.classList.remove('hidden');
        tHome.classList.add('text-brand-600');
        tHome.classList.remove('text-slate-400');
      } else if (viewName === 'mode1') {
        vMode1.classList.remove('hidden');
        tMode1.classList.add('text-brand-600');
        tMode1.classList.remove('text-slate-400');
        renderMode1Carousel();
        setTimeout(() => {
          scrollToSlide(activeCarouselIndex, false);
        }, 80);
      } else if (viewName === 'mode2') {
        vMode2.classList.remove('hidden');
        tMode2.classList.add('text-teal-600');
        tMode2.classList.remove('text-slate-400');
      }

      // Scroll top of container
      document.getElementById('appMain').scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* =========================================================================
       MODE 1 CONTROLLER
       ========================================================================= */

    function confirmMode1Distance() {
      const input = document.getElementById('m1DistanceInput');
      const errorMsg = document.getElementById('m1DistanceError');
      const confirmedBadge = document.getElementById('m1ConfirmedBadge');
      const step2Container = document.getElementById('m1Step2Container');

      const rawVal = input.value.trim();
      const val = parseFloat(rawVal);

      if (isNaN(val) || val <= 0) {
        errorMsg.classList.remove('hidden');
        confirmedBadge.classList.add('hidden');
        mode1ConfirmedDistance = null;
        updateMode1CalculateButton();
        return;
      }

      // Valid distance confirmed
      errorMsg.classList.add('hidden');
      confirmedBadge.classList.remove('hidden');
      mode1ConfirmedDistance = val;

      // Activate Step 2
      step2Container.classList.remove('opacity-40', 'pointer-events-none');

      // Re-render carousel slides
      renderMode1Carousel();

      // Ensure active item is set
      const currentVehicle = FLEET[activeCarouselIndex];
      if (currentVehicle) {
        mode1SelectedVehicleId = currentVehicle.id;
      }

      updateMode1CalculateButton();

      if (!document.getElementById('m1ResultCard').classList.contains('hidden')) {
        calculateMode1Result();
      }
    }

    function resetMode1() {
      const input = document.getElementById('m1DistanceInput');
      const errorMsg = document.getElementById('m1DistanceError');
      const confirmedBadge = document.getElementById('m1ConfirmedBadge');
      const step2Container = document.getElementById('m1Step2Container');
      const resultCard = document.getElementById('m1ResultCard');

      // Clear input
      input.value = '';
      input.focus();

      // Clear distance state
      mode1ConfirmedDistance = null;

      // Hide error, badge
      errorMsg.classList.add('hidden');
      confirmedBadge.classList.add('hidden');

      // Hide result card
      resultCard.classList.add('hidden');

      // Keep carousel visible without out-of-range restrictions, reset to first vehicle (Walking)
      activeCarouselIndex = 0;
      mode1SelectedVehicleId = FLEET[0].id;
      step2Container.classList.remove('opacity-40', 'pointer-events-none');
      renderMode1Carousel();
      scrollToSlide(0, false);

      // Update button state (disabled until distance is entered)
      updateMode1CalculateButton();
    }

    function renderMode1Carousel() {
      const carousel = document.getElementById('m1TransportCarousel');
      const dotsContainer = document.getElementById('m1CarouselDots');
      const allOutBanner = document.getElementById('m1AllOutOfRangeBanner');
      
      carousel.innerHTML = '';
      dotsContainer.innerHTML = '';

      const dist = mode1ConfirmedDistance;
      let availableCount = 0;

      FLEET.forEach((vehicle, idx) => {
        const isOutOfRange = dist !== null && dist > vehicle.range;
        const isSelected = idx === activeCarouselIndex;

        if (!isOutOfRange) {
          availableCount++;
        }

        const card = document.createElement('div');
        card.id = `m1-slide-${vehicle.id}`;
        card.setAttribute('data-index', idx);

        let cardClasses = `flex-shrink-0 w-[176px] h-[180px] snap-center flex flex-col items-center justify-between p-3 rounded-3xl border-2 transition-all duration-200 relative select-none cursor-pointer `;

        if (isOutOfRange) {
          cardClasses += `bg-slate-100/90 border-slate-200 opacity-40 text-slate-400`;
        } else if (isSelected) {
          cardClasses += `selected-transport-card border-brand-600 bg-brand-50 text-slate-900`;
        } else {
          cardClasses += `bg-white border-slate-200 text-slate-700 shadow-sm tap-scale`;
        }

        card.className = cardClasses;

        card.onclick = () => {
          scrollToSlide(idx, true);
        };

        card.innerHTML = `
          <!-- Top meta line -->
          <div class="w-full flex items-center justify-between text-[9px] font-bold px-1">
            <span class="uppercase tracking-wider ${isSelected ? 'text-brand-700 font-extrabold' : 'text-slate-400'}">${vehicle.type}</span>
            <span class="text-slate-400">${idx + 1}/${FLEET.length}</span>
          </div>

          <!-- Hero Product Image -->
          <div class="w-24 h-24 my-auto flex items-center justify-center p-1 overflow-hidden transition-transform">
            ${vehicle.iconSvg}
          </div>

          <!-- Product name placed underneath the image -->
          <div class="w-full text-center px-1 mb-0.5">
            <h4 class="text-xs font-semibold leading-tight line-clamp-2 max-w-[150px] mx-auto ${isSelected ? 'text-brand-900 font-bold' : 'text-slate-700'}">
              ${vehicle.name}
            </h4>
            <p class="text-[10px] text-slate-400 font-normal mt-0.5">
              ${vehicle.speed} mph • ${vehicle.range} mi
            </p>
          </div>
        `;

        carousel.appendChild(card);

        // Pagination Dots
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `w-2 h-2 rounded-full transition-all duration-200 ${idx === activeCarouselIndex ? 'w-5 bg-brand-600' : 'bg-slate-200 hover:bg-slate-300'}`;
        dot.title = `Go to slide ${idx + 1}`;
        dot.onclick = () => scrollToSlide(idx, true);
        dotsContainer.appendChild(dot);
      });

      carousel.onscroll = debounce(() => {
        updateActiveSlideFromScroll();
      }, 40);

      if (dist !== null && availableCount === 0) {
        allOutBanner.classList.remove('hidden');
      } else {
        allOutBanner.classList.add('hidden');
      }
    }

    function scrollToSlide(index, smooth = true) {
      const carousel = document.getElementById('m1TransportCarousel');
      const cards = carousel.children;
      if (!cards[index]) return;

      cards[index].scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'nearest', inline: 'center' });
      activeCarouselIndex = index;
      mode1SelectedVehicleId = FLEET[index].id;
      updateSlideStyles();
      updateDots();
      updateMode1CalculateButton();

      if (!document.getElementById('m1ResultCard').classList.contains('hidden') && mode1ConfirmedDistance) {
        calculateMode1Result();
      }
    }

    function updateActiveSlideFromScroll() {
      const carousel = document.getElementById('m1TransportCarousel');
      const cards = carousel.children;
      if (!cards.length) return;

      const centerPoint = carousel.scrollLeft + (carousel.offsetWidth / 2);
      let closestIdx = 0;
      let minDiff = Infinity;

      for (let i = 0; i < cards.length; i++) {
        const cardCenter = cards[i].offsetLeft + (cards[i].offsetWidth / 2);
        const diff = Math.abs(centerPoint - cardCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      }

      if (closestIdx !== activeCarouselIndex) {
        activeCarouselIndex = closestIdx;
        mode1SelectedVehicleId = FLEET[closestIdx].id;
        updateSlideStyles();
        updateDots();
        updateMode1CalculateButton();

        if (!document.getElementById('m1ResultCard').classList.contains('hidden') && mode1ConfirmedDistance) {
          calculateMode1Result();
        }
      }
    }

    function updateSlideStyles() {
      const carousel = document.getElementById('m1TransportCarousel');
      const cards = carousel.children;
      for (let i = 0; i < cards.length; i++) {
        const isSelected = i === activeCarouselIndex;
        const vehicle = FLEET[i];
        const isOutOfRange = mode1ConfirmedDistance !== null && mode1ConfirmedDistance > vehicle.range;

        if (isSelected) {
          cards[i].classList.add('selected-transport-card');
          cards[i].classList.remove('border-slate-200');
        } else {
          cards[i].classList.remove('selected-transport-card');
          if (!isOutOfRange) {
            cards[i].classList.add('border-slate-200');
          }
        }
      }
    }

    function updateDots() {
      const dotsContainer = document.getElementById('m1CarouselDots');
      const dots = dotsContainer.children;
      for (let i = 0; i < dots.length; i++) {
        if (i === activeCarouselIndex) {
          dots[i].className = 'w-5 h-2 rounded-full bg-brand-600 transition-all duration-200';
        } else {
          dots[i].className = 'w-2 h-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-all duration-200';
        }
      }
    }

    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    function updateMode1CalculateButton() {
      const btn = document.getElementById('m1CalculateBtn');
      const isReady = mode1ConfirmedDistance !== null && mode1ConfirmedDistance > 0 && mode1SelectedVehicleId !== null;

      if (isReady) {
        btn.disabled = false;
        btn.className = `w-full py-4 px-6 rounded-2xl font-black text-base tracking-wide uppercase transition-all shadow-lg shadow-brand-700/25 bg-gradient-to-r from-brand-600 to-teal-700 hover:from-brand-700 hover:to-teal-800 text-white cursor-pointer tap-scale flex items-center justify-center space-x-2`;
      } else {
        btn.disabled = true;
        btn.className = `w-full py-4 px-6 rounded-2xl font-black text-base tracking-wide uppercase transition-all shadow-md bg-slate-200 text-slate-400 cursor-not-allowed flex items-center justify-center space-x-2`;
      }
    }

    function calculateMode1Result() {
      if (!mode1ConfirmedDistance || !mode1SelectedVehicleId) return;

      const vehicle = FLEET.find(item => item.id === mode1SelectedVehicleId);
      if (!vehicle) return;

      const totalMinutes = calcMinutes(mode1ConfirmedDistance, vehicle.speed);
      const formattedTime = formatHoursMinutes(totalMinutes);

      const resultCard = document.getElementById('m1ResultCard');
      const resultTime = document.getElementById('m1ResultTime');
      const resultName = document.getElementById('m1ResultName');
      const resultDistance = document.getElementById('m1ResultDistance');
      const resultSpeedRange = document.getElementById('m1ResultSpeedRange');

      resultTime.textContent = formattedTime;
      resultName.textContent = vehicle.name;
      resultDistance.textContent = `${mode1ConfirmedDistance} mi`;
      resultSpeedRange.textContent = `Speed: ${vehicle.speed} mph • Vehicle Range: ${vehicle.range} miles`;

      // Show result card smoothly only after calculate is triggered
      resultCard.classList.remove('hidden');

      setTimeout(() => {
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }

    function compareCurrentInMode2() {
      if (mode1ConfirmedDistance) {
        document.getElementById('m2DistanceInput').value = mode1ConfirmedDistance;
        triggerMode2Compare();
      }
      switchView('mode2');
    }

    /* =========================================================================
       MODE 2 CONTROLLER
       - Available sorted fast to slow first
       - Unavailable/exceeds range sorted fast to slow after
       - Reset button clears inputs and hides results
       ========================================================================= */

    function triggerMode2Compare() {
      const input = document.getElementById('m2DistanceInput');
      const errorMsg = document.getElementById('m2DistanceError');
      const guideHint = document.getElementById('m2GuideHint');
      const activeDistLabel = document.getElementById('m2ActiveDistLabel');
      const resultsWrapper = document.getElementById('m2ResultsWrapper');

      const rawVal = input.value.trim();
      const val = parseFloat(rawVal);

      if (isNaN(val) || val <= 0) {
        errorMsg.classList.remove('hidden');
        guideHint.classList.add('hidden');
        resultsWrapper.classList.add('hidden');
        return;
      }

      errorMsg.classList.add('hidden');
      guideHint.classList.add('hidden');
      mode2ActiveDistance = val;
      activeDistLabel.textContent = `Distance: ${val} mi`;

      renderMode2Results(val);
      resultsWrapper.classList.remove('hidden');
    }

    function resetMode2() {
      const input = document.getElementById('m2DistanceInput');
      const errorMsg = document.getElementById('m2DistanceError');
      const guideHint = document.getElementById('m2GuideHint');
      const resultsWrapper = document.getElementById('m2ResultsWrapper');
      const resultsList = document.getElementById('m2ResultsList');

      // Clear input
      input.value = '';
      input.focus();

      // Clear state
      mode2ActiveDistance = null;

      // Hide results & clear grid
      resultsWrapper.classList.add('hidden');
      resultsList.innerHTML = '';

      // Reset error state and restore original guidance hint
      errorMsg.classList.add('hidden');
      guideHint.classList.remove('hidden');
    }

    function renderMode2Results(distance) {
      const container = document.getElementById('m2ResultsList');
      container.innerHTML = '';

      // Calculate travel times for ALL 8 transportation modes
      const calculatedFleet = FLEET.map(item => {
        const totalMinutes = calcMinutes(distance, item.speed);
        const isOutOfRange = distance > item.range;
        return {
          ...item,
          totalMinutes,
          formattedTime: formatHoursMinutes(totalMinutes),
          isOutOfRange
        };
      });

      // Split into Available (within range) and Unavailable (exceeds range)
      const availableList = calculatedFleet.filter(item => !item.isOutOfRange);
      const unavailableList = calculatedFleet.filter(item => item.isOutOfRange);

      // Sort both groups ascending by travel time (shortest to longest)
      availableList.sort((a, b) => a.totalMinutes - b.totalMinutes);
      unavailableList.sort((a, b) => a.totalMinutes - b.totalMinutes);

      // Concatenate: available first, then unavailable
      const sortedFleet = [...availableList, ...unavailableList];

      sortedFleet.forEach((vehicle) => {
        const isWarning = vehicle.isOutOfRange;
        const card = document.createElement('div');

        let cardBg = isWarning 
          ? 'bg-coral-50/70 border-2 border-coral-200 text-slate-800' 
          : 'bg-white border-2 border-slate-100 hover:border-teal-300 shadow-sm text-slate-800';

        card.className = `p-4 rounded-3xl ${cardBg} flex flex-col items-center text-center justify-between transition-all duration-200 tap-scale`;

        /* Compare Grid: Doubled Product Photo Size (w-24 h-24), Regular Dark Gray Name Typography, Exceeds Range label */
        card.innerHTML = `
          <!-- Vehicle Icon / Product Image -->
          <div class="w-24 h-24 rounded-2xl flex items-center justify-center ${isWarning ? 'bg-coral-100/70' : 'bg-teal-50/60'} mb-2 p-1.5 transition-transform overflow-hidden">
            <div class="w-full h-full flex items-center justify-center">
              ${vehicle.iconSvg}
            </div>
          </div>

          <!-- Vehicle Name -->
          <h4 class="text-xs font-normal text-slate-600 leading-snug line-clamp-2 min-h-[32px] flex items-center justify-center mb-2 px-1">
            ${vehicle.name}
          </h4>

          <!-- Calculated Travel Time & Warning notice -->
          <div class="w-full flex flex-col items-center">
            <div class="w-full py-1.5 px-2 rounded-xl ${isWarning ? 'bg-coral-100/90 text-coral-700' : 'bg-teal-600 text-white'} text-xs font-black tracking-tight shadow-sm">
              ${vehicle.formattedTime}
            </div>
            ${isWarning ? `<span class="text-[10px] text-red-500 font-medium text-center mt-1">Exceeds Range (${vehicle.range} mi)</span>` : ''}
          </div>
        `;

        container.appendChild(card);
      });
    }

    // Initialize application on load
    window.addEventListener('DOMContentLoaded', () => {

      // Static UI event bindings (moved out of inline HTML handlers)
      document.getElementById('homeChooseRideBtn')?.addEventListener('click', () => switchView('mode1'));
      document.getElementById('homeCompareAllBtn')?.addEventListener('click', () => switchView('mode2'));
      document.getElementById('m1ResetBtn')?.addEventListener('click', resetMode1);
      document.getElementById('m1ConfirmBtn')?.addEventListener('click', confirmMode1Distance);
      document.getElementById('m1CalculateBtn')?.addEventListener('click', calculateMode1Result);
      document.getElementById('m1CompareAllBtn')?.addEventListener('click', compareCurrentInMode2);
      document.getElementById('m2ResetBtn')?.addEventListener('click', resetMode2);
      document.getElementById('m2CompareBtn')?.addEventListener('click', triggerMode2Compare);
      document.getElementById('tabHome')?.addEventListener('click', () => switchView('home'));
      document.getElementById('tabMode1')?.addEventListener('click', () => switchView('mode1'));
      document.getElementById('tabMode2')?.addEventListener('click', () => switchView('mode2'));
      document.getElementById('m1DistanceInput')?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') confirmMode1Distance();
      });
      document.getElementById('m2DistanceInput')?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') triggerMode2Compare();
      });
      activeCarouselIndex = 0;
      mode1SelectedVehicleId = FLEET[0].id;
      mode1ConfirmedDistance = null;

      // Inputs initialized
      document.getElementById('m1DistanceInput').value = '';
      document.getElementById('m2DistanceInput').value = '5';
      mode2ActiveDistance = 5;

      // Render carousel positioning at first item (Walking)
      renderMode1Carousel();
      scrollToSlide(0, false);
      updateMode1CalculateButton();

      // Render Mode 2 initial results
      renderMode2Results(5);

      // Default view is Home
      switchView('home');
    });
