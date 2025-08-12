

async function globalSetup(config) {
  const project = process.env.PW_PROJECT; 
  console.log.apply(config)
}


export default globalSetup;