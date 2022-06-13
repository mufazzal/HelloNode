const fakeLoad_1 = function() {
    const time = new Date().getTime()
    for (let i=0; i<=10000; i++) {
        const v1 = 1236999886*887699954 
        const v2 = 123699984567*887699954 
        const v3 = 123699988234566*887699954 
        const v4 = 123699988234566*887699954 
        const v5 = 123699988234566*887699954 
        const v6 = 123699988234566*887699954 
        const v7 = 123699988234566*887699954 
        const v8 = 123699988234566*887699954 
        const v9 = 123699988234566*887699954 
    }

    const now = new Date().getTime()
    const tt = (now - time) / 1000 
    return `at: ${time} took ${tt} seconds`

}


function fakeLoad(baseNumber) {
    const time = new Date().getTime()
	let result = 0	
	for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i)
	}
    const now = new Date().getTime()
    const tt = (now - time) / 1000 
    return `at: ${time} took ${tt} seconds`}


export {fakeLoad}