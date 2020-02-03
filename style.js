(function (blink) {
	'use strict';

	var yamStyle = function () {
		blink.theme.styles.mcgrawhill.apply(this, arguments);
	},
	page = blink.currentPage;

	yamStyle.prototype = {
		parent: blink.theme.styles.mcgrawhill.prototype,
		bodyClassName: 'content_type_clase_yam',
		toolbar: { name: 'editorial' },
		ckEditorStyles: {
			name: 'yam',
			styles: [
				{ name: 'Título Intro', element: 'h2', attributes: { 'class': 'bck-title-intro'} },
				{ name: 'Título 1', element: 'h2', attributes: { 'class': 'bck-title-1'} },
				{ name: 'Título 1-Izquierda', element: 'h2', attributes: { 'class': 'bck-title-9'} },
				{ name: 'Título 2-Verde', element: 'h2', attributes: { 'class': 'bck-title-2'} },
				{ name: 'Título 3-Amarillo', element: 'h2', attributes: { 'class': 'bck-title-3'} },
				{ name: 'Título 4-Azul', element: 'h2', attributes: { 'class': 'bck-title-6'} },
				{ name: 'Título Story', element: 'h2', attributes: { 'class': 'bck-title-7'} },
				{ name: 'Título Phonics', element: 'h2', attributes: { 'class': 'bck-title-4'} },
				{ name: 'Título Project', element: 'h2', attributes: { 'class': 'bck-title-5'} },
				{ name: 'Título Quiz', element: 'h2', attributes: { 'class': 'bck-title-8'} },
				
				{ name: 'ColorRojo', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'FontInfantil', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'FontInfantilPuntos', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'FontEjemploCursiva', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'FontHurmeGeometric', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
				
				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				{ name: 'Lista TrianguloNaranja', element: 'ul', attributes: { 'class': 'bck-ul-1'} },
				{ name: 'Lista DesNaranja', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
							
				{ name: 'Lista 1', element: 'ol', attributes: { 'class': 'bck-ol-1' } },
				{ name: 'Lista 2', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista 3-Circulo', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista LetraMinus', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista LetraMinusMorada', element: 'ol', attributes: { 'class': 'bck-ol-5' } },
										
				{ name: 'CajaAchieve!', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-1' } },
				{ name: 'CajaFondoColor', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-2' } },
				{ name: 'CajaVideo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-3' } },
				{ name: 'CajaBordesColor', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-4' } },
				{ name: 'CajaInicioUnidad', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-5' } },

				{ name: 'Tabla Color', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-2'} },
				
				{ name: 'Celda Color', element: 'td', attributes: { 'class': 'bck-td-2'} },
				
				{ name: 'Icono Hablar', element: 'span', attributes: { 'class': 'icon icon-hablar' } },
				{ name: 'Icono Hablar2', element: 'span', attributes: { 'class': 'icon icon-hablar2' } },
				{ name: 'Icono HablarBlanco', element: 'span', attributes: { 'class': 'icon icon-hablar3' } },
				{ name: 'Icono Lapiz', element: 'span', attributes: { 'class': 'icon icon-lapiz' } },
				{ name: 'Icono Libro', element: 'span', attributes: { 'class': 'icon icon-libro' } },
				{ name: 'Icono Musica', element: 'span', attributes: { 'class': 'icon icon-musica' } },
				{ name: 'Icono MusicaMorado1', element: 'span', attributes: { 'class': 'icon icon-musica1' } },
				{ name: 'Icono MusicaMorado2', element: 'span', attributes: { 'class': 'icon icon-musica2' } },
				{ name: 'Icono Circulo', element: 'span', attributes: { 'class': 'icon icon-circulo' } },
				{ name: 'Icono Cuadrados', element: 'span', attributes: { 'class': 'icon icon-cuadrados' } },

				{ name: 'Desplegable 1', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown-1' } },
				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown-2' } }
			]
		},
		slidesTitle: {},
		subunits: [],
		totalSlides: 0,

		init: function () {
			this.parent.init.call(this.parent, this);
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		activityDropdown: function () {
			return false;
		}
		
	};

	yamStyle.prototype = _.extend({}, new blink.theme.styles.mcgrawhill(), yamStyle.prototype);

	blink.theme.styles['yam'] = yamStyle;

})( blink );
