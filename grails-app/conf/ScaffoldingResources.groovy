modules = {
	'modernizr' {
		resource url:'js/modernizr-1.6.min.js', disposition: 'head'
	}
    'scaffolding' {
		dependsOn 'modernizr', 'jquery'
        resource 'css/main.css'
        resource 'css/mobile.css'
        resource 'css/plugins.css'
		resource 'js/grails.ajaxloader.js'
		resource 'js/grails.autocomplete.js'
		resource 'js/grails.list.js'
		resource 'js/grails.range.js'
		resource 'js/grails.errors.js'
		resource 'js/grails.alerts.js'
        resource 'js/application.js'
    }
}