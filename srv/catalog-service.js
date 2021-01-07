// const cds = require('@sap/cds');
// const cdse = require('cdse');

// module.exports = cds.service.impl(async function() {
// 	const { Products } = this.entities;
// 	const service = await cdse.connect.to('s4hretail_acdoc');
// 	this.on('READ', Products, async () => {
// 		const result = await service.run({ url: 'GetDataSet' });
// 		return result.value;
// 	});
// });

const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
	const { Products } = this.entities;
	const service = await cds.connect.to('s4hretail_acdoc');
	this.on('READ', Products, request => {
		return service.tx(request).run(request.query);
    });
    
    this.on('CREATE', 'PostDataSet', request => {
        return service.tx(request).run(request.query);
    });
});