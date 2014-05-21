// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

$(function() {


		today = new Date();

		BigDay = new Date("November 8, 2016");

		msPerDay = 24 * 60 * 60 * 1000 ;

		timeLeft = (BigDay.getTime() - today.getTime());

		e_daysLeft = timeLeft / msPerDay;

		daysLeft = Math.floor(e_daysLeft);

		e_hrsLeft = (e_daysLeft - daysLeft)*24;

		hrsLeft = Math.floor(e_hrsLeft);

		minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);

		$("#result").html( "There are<BR> <H4>" + daysLeft + " days " + hrsLeft +" hours and " + minsLeft + " minutes left </H4> until the next presidential election!<P>");

	
});
