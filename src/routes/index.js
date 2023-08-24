const { db } = require('../firebase')
const { Router } = require('express')
const router = Router()

//Es una peticion
router.get('/', async(req, res) => {
    // Try catch funciona para no detener el programa y simplemente obtener el 
    // error sin que se detenga la ejecucion
    try{
        const querySnapshot = await db.collection(contacts).get()
        const contacts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        res.render('index', { contacts })
    } catch(error){
        console.log('Error', error)
    }
})