export default {
  items: [
    {
      name: 'My Stock Project',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
{
    title: true,
    name: 'Componets',
    wrapper: {
      element: '',
      attributes: {},
    },
},

{
  name: 'Base',
  url: '/base',
  icon: 'icon-puzzle',
  children: [

  {
      name: 'Cards',
      url: '/base/Cards',
      icon: 'icon-puzzle',
  },
  {
      name: 'Carousels',
      url: '/base/Carousels',
      icon: 'icon-puzzle',
  },
],
},

{
  name: 'Charts',
  url: '/Charts',
  icon: 'icon-pie-chart',
},
],
};
