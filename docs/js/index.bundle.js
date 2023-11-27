!function(){"use strict";var e={d:function(t,r){for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};e.d({},{Z:function(){return D}});const t=document.querySelectorAll(".dynamic-data"),r="e732a92c66574d856b927e390c09674e",a=document.querySelector(".header__search-input"),n=document.querySelector(".header__search-span"),o=document.querySelector(".header__location"),s=document.querySelector(".weather__city"),c=s.querySelector(".weather__city-name"),i=s.querySelector(".weather__city-time"),d=s.querySelector(".weather__city-date"),l=document.querySelector(".weather__current"),u=l.querySelector(".weather__current-temperature"),h=l.querySelector(".weather__current-feels_temperature"),w=l.querySelector("#currSunriseTime"),y=l.querySelector("#currSunsetTime"),m=l.querySelector(".weather__current-icon"),p=l.querySelector(".weather__current-weather"),_=l.querySelector("#currHumidity"),g=l.querySelector("#currWind"),S=l.querySelector("#currPressure"),q=l.querySelector("#currVisibility"),$=document.querySelector(".weather__days"),f=document.querySelector(".weather__hours"),v=f.querySelector(".weather__hours-wrapper"),k={"01d":"d-clear-sky","01n":"n-clear-sky","02d":"d-few-clouds","02n":"n-few-clouds","03d":"d-scattered-clouds","03n":"n-scattered-clouds","04d":"a-clouds","04n":"a-clouds","09d":"n-shower-rainl","09n":"n-shower-rain","10d":"a-rain","10n":"a-rain","11d":"d-thunderstorm","11n":"n-thunderstorm","13d":"d-snow","13n":"n-snow","50d":"a-haze","50n":"a-haze"},C=async(e,t)=>{const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=new Date(1e3*e),o=n.getDate(),s=n.getMonth(),c=n.getDay(),i=n.getHours().toString().padStart(2,"0"),d=n.getMinutes().toString().padStart(2,"0"),l=new Date,u=l.getHours().toString().padStart(2,"0"),h=l.getMinutes().toString().padStart(2,"0"),w=`${o} ${["January","February","March","April","May","June","July","August","September","October","November","December"][s]} ${r[c]}`,y=`${r[c]}, ${o} ${a[s]}`,m=`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][c]}, ${o} ${a[s]}`;switch(t){case"day":return r[c];case"hour":return`${i}:${d}`;case"short":return y;case"shortest":return m;case"currentTime":return`${u}:${h}`;default:return w}},b=async e=>`${Math.round(3.6*e)} km/h`,L=async e=>(e=>e<10&&e>0?`0${e}°C`:`${e}°C`)(Math.round(e));var x=async()=>{navigator.geolocation.getCurrentPosition((async e=>{const t={lat:e.coords.latitude,lon:e.coords.longitude};console.log(t),await D(t,r)}),(e=>{console.log(e),D("Kyiv",r)}))};const E=async(e,t)=>{alert(e),document.addEventListener("keydown",(e=>{"Escape"===e.code&&console.log("zaaazazaaza")}))};function M(){const e=a.value.trim();A(e,r),console.log(e)}setInterval((async()=>{const e=await C(null,"currentTime");i.textContent=e}),1e3),o.addEventListener("click",x),x(),(async()=>{const e=$.querySelector(".weather__days-wrapper");for(let t=0;t<5;t++){const t=document.createElement("div");t.classList.add("weather__days-item");const r=document.createElement("img");r.classList.add("weather__days-icon"),r.setAttribute("alt","icon");const a=document.createElement("div");a.classList.add("weather__days-temperature");const n=document.createElement("div");n.classList.add("weather__days-date"),t.append(r,a,n),e.appendChild(t)}})(),(async()=>{const e=f.querySelector(".weather__hours-wrapper");for(let t=0;t<6;t++){const t=document.createElement("div");t.classList.add("weather__hours-item");const r=document.createElement("div");r.classList.add("weather__hours-time");const a=document.createElement("img");a.classList.add("weather__hours-icon_weather"),a.setAttribute("alt","icon-weather");const n=document.createElement("div");n.classList.add("weather__hours-temperature");const o=document.createElement("img");o.classList.add("weather__hours-icon_wind"),o.setAttribute("alt","icon-wind");const s=document.createElement("div");s.classList.add("weather__hours-wind"),t.append(r,a,n,o,s),e.appendChild(t)}})();const A=async(e,r)=>{try{await(async()=>{a.blur();for(let e=0;e<t.length;e++)t[e].classList.add("loading")})(),await(async(e,t)=>{let r;r=e.lat&&e.lon?`https://api.openweathermap.org/data/2.5/weather?lat=${e.lat}&lon=${e.lon}&appid=${t}&units=metric`:`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${t}&units=metric`;const a=await fetch(r);if(!a.ok)throw 404===a.status?new Error(`Sorry, we couldn't find ${e}. Please double-check the spelling and try again.`):new Error("Oops! We are having trouble with getting tha last weather information right now. Please try again later or contact support if the problem persists.");const n=await a.json(),{name:o,visibility:s,dt:i}=n,{speed:l}=n.wind,{temp:$,feels_like:f,humidity:v,pressure:x}=n.main,{icon:E,description:M}=n.weather[0],{sunrise:A,sunset:D}=n.sys;c.textContent=o,d.textContent=await C(i,"short"),u.textContent=await L($),h.textContent=await L(f),w.textContent=`${await C(A,"hour")} AM`,y.textContent=`${await C(D,"hour")} PM`,m.src=`./icons/weather/weather/${k[E]}.png`,p.textContent=M,_.textContent=`${v} %`,g.textContent=await b(l),S.textContent=`${x} hPa`,q.textContent=await(async e=>e/1e3+" km")(s)})(e,r),await(async(e,t)=>{const r=$.querySelectorAll(".weather__days-icon"),a=$.querySelectorAll(".weather__days-temperature"),n=$.querySelectorAll(".weather__days-date"),o=document.querySelectorAll(".weather__hours-item"),s=f.querySelectorAll(".weather__hours-time"),c=f.querySelectorAll(".weather__hours-icon_weather"),i=f.querySelectorAll(".weather__hours-temperature"),d=f.querySelectorAll(".weather__hours-icon_wind"),l=f.querySelectorAll(".weather__hours-wind");let u;u=e.lat&&e.lon?`https://api.openweathermap.org/data/2.5/forecast?lat=${e.lat}&lon=${e.lon}&appid=${t}&units=metric`:`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=${t}&units=metric`;const h=await fetch(u);if(!h.ok)throw 404===h.status?new Error(`Sorry, we couldn't find ${e}. Please double-check the spelling and try again.`):new Error("Oops! We're having trouble getting the latest weather information right now. Please try again later or contact support if the problem persists.");const w=await h.json(),y=(e=>{let t=[];for(let r=0;r<40;r++)e.list[r].dt_txt.match("12:00:00")&&t.push(w.list[r]);return t})(w),m=async(e=null,t)=>{const r=window.innerWidth;switch(t){case"dailyDate":return r>=577&&r<=922?await C(e,"shortest"):await C(e,"short");case"hourlyItems":if(r>=769&&r<=922)return v.removeChild(v.lastChild)}};for(let e=0;e<5;e++)r[e].src=`./icons/weather/weather/${k[y[e].weather[0].icon]}.png`,a[e].textContent=await L(y[e].main.temp),n[e].textContent=await m(y[e].dt,"dailyDate");const p=(e,t)=>{["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"].includes(t)||(e.style.background="linear-gradient(174deg, #443D64 -15.92%, rgba(101, 130, 198, 0.00) 192.45%)")};for(let e=0;e<6;e++)s[e].textContent=await C(w.list[e].dt,"hour"),c[e].src=`./icons/weather/weather/${k[w.list[e].weather[0].icon]}.png`,i[e].textContent=await L(w.list[e].main.temp),d[e].src="./icons/weather/wind-vector.svg",_=d[e],g=w.list[e].wind.deg,_.style.transform=`rotate(${g-45}deg)`,l[e].textContent=await b(w.list[e].wind.speed),p(o[e],s[e].textContent);var _,g;m("","hourlyItems")})(e,r),await(async()=>{for(let e=0;e<t.length;e++)t[e].classList.remove("loading")})()}catch(e){"Failed to fetch"===e.message?await E("Oh! It looks like you're not connected to the internet. Please check your connection and try again."):await E(e.message)}};var D=A;n.addEventListener("click",M),a.addEventListener("keyup",(e=>{"Enter"==e.key&&M()}));const P=document.querySelector(".header__darkmode-check"),O=document.querySelector(".header__darkmode-text");document.addEventListener("DOMContentLoaded",(()=>{const e="true"===localStorage.getItem("isDarkMode");document.body.classList.toggle("dark",e),O.textContent=e?"Dark Mode":"Light Mode",P.checked=e})),P.addEventListener("change",(()=>{const e=document.body.classList.toggle("dark");O.textContent=e?"Dark Mode":"Light Mode",localStorage.setItem("isDarkMode",e.toString())}))}();