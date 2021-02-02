const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // inserir dados na tabela 
    await saveOrphanage(db, {
        lat: "-23.0439433",
        lng: "-47.3743414", 
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "998879987", 
        images: [
           "https://images.unsplash.com/photo-1574647258357-e19ec1bcc09c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

           "https://images.unsplash.com/photo-1581701391032-33cb5e7b44fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" 
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visistas das 18h até 8h",
        open_on_weekends:  "1"   
    })
    
    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages) 

    // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // deletar dado da tabela
    // await db.run('DELETE FROM orphanages WHERE id = "3"')
})