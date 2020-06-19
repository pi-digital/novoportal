document.addEventListener("DOMContentLoaded", function() {
    //Create/add stars to layers
    const starLayers = document.querySelectorAll('.star-layer');
    
    starLayers.forEach(layer => {
      for (let i = 0; i < 60; i++) {
        const star = document.createElement('li');
        star.className = 'star';
        layer.appendChild(star);
      }
    })
    const stars = document.querySelectorAll('.star');

     //Randomize star position
    stars.forEach(star => {
        star.style.top = Math.floor(Math.random() * 99) + "%";
        star.style.left = Math.floor(Math.random() * 99) + "%";
    })

    //Randomize exhaust fume position
    const fumes = document.querySelectorAll('.smoke-cloud');

    fumes.forEach(cloud => {
        cloud.style.top = Math.floor(Math.random() * 50) + "%";
        cloud.style.left = Math.floor(Math.random() * 101) + "%";
    })

    setInterval(function() {

        fumes.forEach(cloud => {
            cloud.style.display = "none";
            cloud.style.top = Math.floor(Math.random() * 50) + "%";
            cloud.style.left = Math.floor(Math.random() * 101) + "%";
            cloud.style.display = "block";
        })
    }, 2950);
    
    const $starLayers = document.getElementsByClassName("star-layer");
    const $body = document.getElementsByTagName("body");
    const $rocket = document.getElementById("svg-rocket");
    const $moon = document.getElementById("moon");
    const $fire = document.getElementById("fire");
    const $trail = document.getElementById("trail");
    const $galaxy = document.getElementById("svg-galaxy");
    const $flash = document.getElementById("flash");
    const $milestones = document.getElementById("milestone-wrapper");
    const $title = document.getElementById("title");
    const $undraw = document.getElementById("undraw");
    const $options = document.querySelectorAll(".planet");

    const tl = new TimelineLite({});
    tl.to($fire, 0.3, {
            opacity: 0,
            repeat: 3
        })
        .to($trail, 0.2, {
            opacity: 1
        })
        .call(function() {
            $rocket.classList.remove("rocket-hover");
            $rocket.classList.add("rocket-shake");
        })
        .to($rocket, 1, {
            bottom: 150,
            delay: 0.6
        })
        .to($trail, 0.5, {
            height: 400
        }, "-=1")
        .to($moon, 3, {
            transform: "scale(7)",
            top: "50%",
            right: -1200,
            ease: Power0.easeIn,
            delay: 2
        }, "-=2")
        .to($galaxy, 2, {
            transform: "scale(1)",
            left: -400,
            top: "40%"
        }, "-=1")
        .to($rocket, 0.5, {
            bottom: "120%"
        }, "-=0.5")
        .to($trail, 0.5, {
            height: 1800
        }, "-=0.5")
        .to($flash, 0.3, {
            width: 10,
            height: "100%"
        }, "-=0.2")
        .to($flash, 0.3, {
            width: "100%",
            height: "100%"
        })
        .call(function() {
            document.getElementById('space').remove();
            $("html").css("overflow", "auto");
            $("#flash").remove();
        })
        .to($milestones, 2, {
            opacity: 1,
            display: "flex",
        })
        .to($title, 1, {
            opacity: 1
        }, "-=1")
         // .staggerTo($options, .6, {transform: "scale(1)", opacity: 1}, 0.2, "-=1")

    $(".planet-wrapper").click(function() {
        $(".planet-wrapper").addClass("choice-selected");
        $(".planet-wrapper").removeClass("current-choice");
        $(this).addClass("current-choice");
        $("#milestone-wrapper").addClass("choice-selected");
        var tlData = $(this).data("tl");
        var data = window[tlData];
        $("#tl").html("");
        $("#tl").addClass("tl-show");
        data.forEach(function(item) {
            var date = item.date ? "<h2 class='date-line'>" + item.date + "</h2>" : "";
            $("#tl").append("<div class='timeline-item'><div class='timeline-icon'><i class='fas fa-star'></i></div><div class='timeline-content'>" + date + "<p>" + item.content + "</p></div></div>");
        });
        $("#tl").append('<div class="scroll-top"><i class="fas fa-chevron-up"></i></div>');
      $(".scroll-top").click(function() {
        window.scrollTo(0,0);
      })
        const timelineItems = $('.timeline-item');
        timelineItems.each(function(index) {
          if (index > 0) {
            if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.9) {
                $(this).find('.timeline-content, .timeline-icon').addClass('hidden');
            }
          }
            
        });

        $("#tl").hide().fadeIn();

        $(window).on('scroll', function() {
            timelineItems.each(function() {
                if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.9 && $(this).find('.timeline-content, .timeline-icon').hasClass('hidden')) {
                    $(this).find('.timeline-content, .timeline-icon').removeClass('hidden').addClass('bounce');
                }
            });
        });

    })

});

var demos = [{
        date: "Centrado no Cidadão",
    },
    {
        date: "Uniformização vs. Dispersão",
    },
    {
        date: "Simples e Intuitivo vs. Complexo e Textual",
    },
    {
        date: "Antecipação vs. Reação",
    },
    {
        date: "Ferramentas Modernas";
    },
    {
        date: "Integração de Serviços",
    },
    {
        date: "Serviços Preditivos e Personalizados",
    },
    {
        date: "Painéis de Avaliação e Monitoramento",
    },
];

var development = [{
        date: "Princípio de Pareto",
    },
];

var rollout = [
]
