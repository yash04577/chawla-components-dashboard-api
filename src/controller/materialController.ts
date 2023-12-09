import { material } from "../model/materialSchema.js";


export const addMaterial = async(req, res) =>{

    const {id, materialName, type, unit} = req.body;

    try {

        const fetchMaterial = await material.findOne({id, materialName, type, unit});

        if(fetchMaterial){
          res.status(500).json({message: `Material already present`});
        }
        else{
          const savedMaterial = await material.create({id, materialName, type, unit});
          res.status(200).json({message: "material added sucessfully", savedMaterial});
        }

    } catch (error) {
        res.status(500).json({message: `Internal server error`});
    }
}


export const deleteMaterial = async(req, res) =>{
  
    const {id} = req.query;
    
    try {
      await material.findByIdAndDelete(id);
      res.status(200).json({message: "material deleted sucessfully"});
    } catch (error) {
      res.status(400).json({message: `Internal server error ${error}`});
    }
  }
  
  
  export const updateMaterial = async(req, res) =>{
    
    const {objectid} = req.query;
    const {id, materialName, type, unit} = req.body;
    
    try {
        const updatedMaterial = await material.findByIdAndUpdate(objectid, {
            id:id,
            materialName: materialName,
            type: type,
            unit: unit
        })
        
        res.status(200).json({message: "material updated sucessfully", updatedMaterial});
        
    } catch (error) {
        res.status(400).json({message: `Internal server error ${error}`});
    }
}


export const getAllMaterial = async(req, res) =>{
    try {

        const allMaterial = await material.find({});
        res.status(200).json({message: "fetched all material", allMaterial});
        
    } catch (error) {
        res.status(400).json({message: `Internal server error ${error}`});
      }
    }
    
    
    export const findMaterialById = async(req, res) =>{
      const {id} = req.query
      try {
          const fetchedMaterial = await material.findById(id);
          res.status(200).json({message: "material fetched", fetchedMaterial})
        
      } catch (error) {
        res.status(400).json({message: `Internal server error ${error}`});
  
      }
  }


export const uploadAllData = async(req, res) =>{
    try {
        
        const data = [
            {
              "id": "s100",
              "materialName": "Cold Drawing MS Wire",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s101",
              "materialName": "Steel Rod",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s102",
              "materialName": "Aluminum Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s103",
              "materialName": "Copper Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s104",
              "materialName": "Alloy Steel Bar",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s105",
              "materialName": "Brass Plate",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s106",
              "materialName": "Titanium Wire",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s107",
              "materialName": "Nickel Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s108",
              "materialName": "Stainless Steel Rod",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s109",
              "materialName": "Copper Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s110",
              "materialName": "Bronze Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s111",
              "materialName": "Aluminum Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s112",
              "materialName": "Carbon Steel Bar",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s113",
              "materialName": "Zinc Plate",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s114",
              "materialName": "Cobalt Wire",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s115",
              "materialName": "Tin Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s116",
              "materialName": "Lead Rod",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s117",
              "materialName": "Silver Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s118",
              "materialName": "Gold Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s119",
              "materialName": "Platinum Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s120",
              "materialName": "Palladium Bar",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s121",
              "materialName": "Rhodium Plate",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s122",
              "materialName": "Iridium Wire",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s123",
              "materialName": "Ruthenium Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s124",
              "materialName": "Osmium Rod",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s125",
              "materialName": "Neodymium Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s126",
              "materialName": "Samarium Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s127",
              "materialName": "Europium Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s128",
              "materialName": "Gadolinium Bar",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s129",
              "materialName": "Terbium Plate",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s130",
              "materialName": "Dysprosium Wire",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s131",
              "materialName": "Holmium Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s132",
              "materialName": "Erbium Rod",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s133",
              "materialName": "Thulium Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s134",
              "materialName": "Ytterbium Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s135",
              "materialName": "Lutetium Plate",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s136",
              "materialName": "Hafnium Bar",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s137",
              "materialName": "Tantalum Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s138",
              "materialName": "Tungsten Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s139",
              "materialName": "Rhenium Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s140",
              "materialName": "Osmium Rod",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s141",
              "materialName": "Iridium Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s142",
              "materialName": "Platinum Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s143",
              "materialName": "Gold Plate",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s144",
              "materialName": "Mercury Bar",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s145",
              "materialName": "Thallium Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s146",
              "materialName": "Lead Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s147",
              "materialName": "Bismuth Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s148",
              "materialName": "Polonium Rod",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s149",
              "materialName": "Astatine Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s150",
              "materialName": "Radon Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s151",
              "materialName": "Francium Plate",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s152",
              "materialName": "Radium Bar",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s153",
              "materialName": "Actinium Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s154",
              "materialName": "Thorium Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s155",
              "materialName": "Protactinium Coil",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s156",
              "materialName": "Uranium Rod",
              "type": "rm",
              "unit": "kg"
            },
            {
              "id": "s157",
              "materialName": "Neptunium Wire",
              "type": "component",
              "unit": "g"
            },
            {
              "id": "s158",
              "materialName": "Plutonium Sheet",
              "type": "raw",
              "unit": "lbs"
            },
            {
              "id": "s159",
              "materialName": "Americium Plate",
              "type": "finished",
              "unit": "ton"
            },
            {
              "id": "s160",
              "materialName": "Curium Bar",
              "type": "rm",
              "unit": "kg"
            }
          ]
          
            console.log("uploading data");
            for(let i=0; i<61; i++){
                const newMaterial = new material(data[i]);
                await newMaterial.save();
            }
            console.log("data uploaded");
            res.status(200).json({message: "fetched all material"});

    } catch (error) {
        res.status(400).json({message: `Internal server error ${error}`});
    }
}