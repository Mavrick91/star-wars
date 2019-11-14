const fetch = require('node-fetch')
const fs = require('fs')

fetch(`http://localhost:4000/graphql`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    variables: {},
    query: `{
			__schema {
				types {
					kind
					name
					possibleTypes {
						name
					}
				}
			}
		}`,
  }),
})
  .then(res => res.json())
  .then(res => {
    res.data.__schema.types = res.data.__schema.types.filter(
      type => type.possibleTypes !== null,
    )
    fs.writeFileSync(
      './src/fragmentTypes.json',
      JSON.stringify(res.data),
      err => {
        if (err) console.log('Error writing fragmentTypes file', err)
        else console.log('Fragment types successfully extracted')
      },
    )
  })
