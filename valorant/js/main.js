window.onload=function(){document.body.classList.add("loaded_hiding");window.setTimeout(function(){document.body.classList.add("loaded");document.body.classList.remove("loaded_hiding")},500)};var bgSound=document.getElementById("bgsound");bgSound.volume=0.1;var hoverSound=document.getElementById("hover-sound");var clickSound=document.getElementById("click-sound");$(".hero").on("mouseover",playHover);$(".hover__wrapper").on("mouseover",playHover);$(".hero").on("click",playClick);$(".details__abil-item").on("click",playClick);$(".stop").on("mouseover",function(a){a.stopPropagation()});function playHover(){hoverSound.play()}function playClick(){clickSound.play()}$(document).ready(function(){var a=document.getElementById("move-sound");a.volume=0.4;$("#phoenix-hero").on("click",function(){$(".hero").removeClass("hero--active"),$("#phoenix-hero").addClass("hero--active"),$(".skills__inner").removeClass("skills__inner--active"),$("#phoenix-abil").addClass("skills__inner--active")});$("#jett-hero").on("click",function(){$(".hero").removeClass("hero--active"),$("#jett-hero").addClass("hero--active"),$(".skills__inner").removeClass("skills__inner--active"),$("#jett-abil").addClass("skills__inner--active")});$("#sova-hero").on("click",function(){$(".hero").removeClass("hero--active"),$("#sova-hero").addClass("hero--active"),$(".skills__inner").removeClass("skills__inner--active"),$("#sova-abil").addClass("skills__inner--active")});$("#sage-hero").on("click",function(){$(".hero").removeClass("hero--active"),$("#sage-hero").addClass("hero--active"),$(".skills__inner").removeClass("skills__inner--active"),$("#sage-abil").addClass("skills__inner--active")});$(".go-back").on("click",function(){a.play(),$(".content").removeClass("content--off"),$(".content-back").removeClass("content-back--on")});$("#phoenix-btn").on("click",function(){a.play(),$(".content").addClass("content--off"),$(".content-back").removeClass("content-back--on"),$("#phoenix-page").addClass("content-back--on")});$("#jett-btn").on("click",function(){a.play(),$(".content").addClass("content--off"),$(".content-back").removeClass("content-back--on"),$("#jett-page").addClass("content-back--on")});$("#sova-btn").on("click",function(){a.play(),$(".content").addClass("content--off"),$(".content-back").removeClass("content-back--on"),$("#sova-page").addClass("content-back--on")});$("#sage-btn").on("click",function(){a.play(),$(".content").addClass("content--off"),$(".content-back").removeClass("content-back--on"),$("#sage-page").addClass("content-back--on")});$(".details__abil-item:nth-child(1)").on("click",function(){$(".details__info-skill").removeClass("details__info-skill--active"),$(".details__info-skill:nth-child(1)").addClass("details__info-skill--active"),$(".details__abil-item").removeClass("details__abil-item--active"),$(".details__abil-item:nth-child(1)").addClass("details__abil-item--active")});$(".details__abil-item:nth-child(3)").on("click",function(){$(".details__info-skill").removeClass("details__info-skill--active"),$(".details__info-skill:nth-child(2)").addClass("details__info-skill--active"),$(".details__abil-item").removeClass("details__abil-item--active"),$(".details__abil-item:nth-child(3)").addClass("details__abil-item--active")});$(".details__abil-item:nth-child(5)").on("click",function(){$(".details__info-skill").removeClass("details__info-skill--active"),$(".details__info-skill:nth-child(3)").addClass("details__info-skill--active"),$(".details__abil-item").removeClass("details__abil-item--active"),$(".details__abil-item:nth-child(5)").addClass("details__abil-item--active")});$(".details__abil-item:nth-child(7)").on("click",function(){$(".details__info-skill").removeClass("details__info-skill--active"),$(".details__info-skill:nth-child(4)").addClass("details__info-skill--active"),$(".details__abil-item").removeClass("details__abil-item--active"),$(".details__abil-item:nth-child(7)").addClass("details__abil-item--active")})});