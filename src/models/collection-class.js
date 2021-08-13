


class Collection {
    
    constructor(collectionmodel) {
        this.collectionmodel = collectionmodel;
    }

    async create(object) {
     try {
            return await this.collectionmodel.create(object);
        } catch(err) {
            console.error('err ', this.collectionmodel.name)
        }
    }

    async read(id) {
        try{
            let recordsCollection = null;
            if (id) {
                // get specific row
                recordsCollection = await this.collectionmodel.findOne({where: {id: id }});
            } else {
                // get all data
                recordsCollection = await this.collectionmodel.findAll();
            }
            return recordsCollection;
        } catch(err) {
            console.error('reading error ', this.collectionmodel.name, `id: ${id}`)
        }

    }

    async update(id, obj) {
        try{
            let locatByid = await this.collectionmodel.findOne({where: {id}});
            let updatedRecord = await locatByid.update(obj);
            return updatedRecord;
        } catch(err) {
            console.error('updating error', this.collectionmodel.name, `id: ${id}`)
        }
      
    }

    async delete(id) {

        if (!id) throw new Error(' No ID is provided !!! for model: ', this.collectionmodel.name);

        try {
            let deletedRecords = await this.collectionmodel.destroy({where: {id}});
            return deletedRecords; // or return directly withot creating a variable
        } catch(e) {
            console.error('deleting error ', this.collectionmodel.name, `id: ${id}`)
        }
    }
}

module.exports = Collection;