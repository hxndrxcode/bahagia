const { hooks } = require('@adonisjs/ignitor')

hooks.before.providersBooted(() => {
	const Env = use('Env')
	const View = use('View')

  View.global('env', function(str) {
    return Env.get(str) || ''
  })

	View.global('formatDate', function (time) {
    if (!time) return '';

    const addZero = (d) => {
      return d.toString().length == 2 ? d : '0' + d
    }

    const d = new Date(time)
    const yyyy = d.getFullYear()
    const MM = addZero(d.getMonth() + 1)
    const dd = addZero(d.getDate())
    return `${yyyy}-${MM}-${dd}`
	})

	View.global('sitemapDate', function (time) {
    const d = new Date(time)
    return d.toISOString();
  })
})
