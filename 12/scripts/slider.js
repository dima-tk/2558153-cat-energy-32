(function(){let e=document.querySelector(".live__slider"),r=e.querySelector(".live__slide--before"),l=e.querySelector(".live__slide--after"),t=e.querySelector(".live__range"),o=document.querySelector(".live__progress-bar");t.addEventListener("input",i=>{l.style.width=`${100-t.value}%`,r.style.width=`${t.value}%`,o.style.setProperty("--position",`${i.target.value}%`)})})();
