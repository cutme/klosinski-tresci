import { gsap } from "gsap";
import { ScrollToPlugin, Power4 } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
        	isInView: isInView,
        	scrollTo: scrollTo
        };
    };   
    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };
    
    const scrollTo = function (target, speed, offset) {    

		gsap.to(window, { 
            duration: 1.5, scrollTo: { 
                y: target - offset, 
            }, 
            ease: Power4.easeOut,
        });
        
	};
    
    cutme.Helpers = new Helpers();

}(window, document, window.cutme = window.cutme  || {}));