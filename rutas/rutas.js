const express = require("express");
const router = express.Router();
const path = require("path");
const BD = require("../dbcondig/dbconfig");
BD.autoCommit = true;

router.get("/", (req, resp) => {
  resp.send({ message: "Hola mundo!" });
});

//CRUD PARA ORDEN DE COMPRA
router.get("/getOrdenCompra", async (req, res) => {
  sql = "select * from Orden_de_Compra";

  let result = await BD.Open(sql, [], true);
  Orders = [];

  result.rows.map((order) => {
    let orderSchema = {
      ID_orden_C: order[0],
      fecha_estimada: order[1],
      ID_Vendedor: order[2],
      ID_cliente: order[3],
    };
    Orders.push(orderSchema);
  });
  //console.log(Orders);
  res.json(Orders);
});

router.delete("/deleteOrdenCompra", async (req, res) => {
  let ID_orden_C = req.body.ID_orden_C;
  sql = `DELETE * FROM Orden_de_Compra WHERE ID_orden_C = '${ID_orden_C}'`;
  let result = await BD.Open(sql, [], true);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.put("/updateOrdenCompra", async (req, res) => {
  let ID_orden_C = req.body.ID_orden_C;
  let fecha_estimada = req.body.fecha_estimada;
  let ID_vendedor = req.body.ID_vendedor;
  let ID_cliente = req.body.ID_cliente;

  sql = `UPDATE Orden_de_Compra  SET fecha_estimada = '${fecha_estimada}', ID_vendedor = '${ID_vendedor}', ID_cliente = '${ID_cliente}'WHERE ID_Orden_C = '${ID_orden_C}'`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.post("/addOrdenCompra",async(req,res) =>{
  let ID_orden_C = req.body.ID_orden_C;
  let fecha_estimada = req.body.fecha_estimada;
  let ID_vendedor = req.body.ID_vendedor;
  let ID_cliente = req.body.ID_cliente;

  sql = `INSERT INTO Orden_de_Compra VALUES ('${ID_orden_C}','${fecha_estimada}', '${ID_vendedor}', '${ID_cliente}');`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
})

//CRUD PARA ORDEN ENVIO
router.get("/getOrdenEnvio", async (req, res) => {
  sql = "select * from Orden_de_Envio";

  let result = await BD.Open(sql, [], true);
  Orders = [];

  result.rows.map((order) => {
    let orderSchema = {
      ID_orden_envio: order[0],
      fecha: order[1],
      ID_orden_C: order[2],
    };
    Orders.push(orderSchema);
  });
  //console.log(Orders);
  res.json(Orders);
});

router.delete("/deleteOrdenEnvio", async (req, res) => {
  let id = req.body.ID_orden_envio;
  sql = `DELETE * FROM Orden_de_Envio WHERE ID_orden_envio = '${id}'`;
  let result = await BD.Open(sql, [], true);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.put("/updateOrdenEnvio", async (req, res) => {
  let ID_orden_envio = req.body.ID_orden_envio;
  let fecha = req.body.fecha;
  let ID_orden_C = req.body.ID_Orden_C;

  sql = `UPDATE Orden_de_Envio  SET fecha = '${fecha}', ID_orden_C = '${ID_orden_C}' WHERE ID_orden_envio = '${ID_orden_envio}'`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.post("/addOrdenEnvio", async (req, res) => {
  let ID_orden_envio = req.body.ID_orden_envio;
  let fecha = req.body.fecha;
  let ID_orden_C = req.body.ID_Orden_C;

  sql = `INSERT INTO Orden_de_Compra VALUES ('${ID_orden_envio}', '${fecha}', '${ID_orden_C}')`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

//CRUD PARA PROVEEDOR
router.get("/getProveedor", async (req, res) => {
  sql = "select * from Proveedor";

  let result = await BD.Open(sql, [], true);
  Proveedor = [];

  result.rows.map((prov) => {
    let provSchema = {
      ID_proveedor: prov[0],
      RFC: prov[1],
      telefono: prov[2],
      nombre : prov[3],
    };
    Proveedor.push(provSchema);
  });
  //console.log(Orders);
  res.json(Proveedor);
});

router.delete("/deleteProveedor", async (req, res) => {
  let id = req.body.ID_proveedor;
  sql = `DELETE * FROM Proveedor WHERE ID_proveedor = '${id}'`;
  let result = await BD.Open(sql, [], true);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.put("/updateProveedor", async (req, res) => {
  let ID_proveedor = req.body.ID_proveedor;
  let RFC = req.body.RFC;
  let telefono = req.body.telefono;
  let nombre = req.body.nombre;

  sql = `UPDATE Proveedor SET RFC = '${RFC}', telefono = '${telefono}', nombre = '${nombre}' WHERE ID_proveedor = '${ID_proveedor}'`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.post("/addProveedor", async (req, res) => {
  let ID_proveedor = req.body.ID_proveedor;
  let RFC = req.body.RFC;
  let telefono = req.body.telefono;
  let nombre = req.body.nombre;

  sql = `INSERT INTO Proveedor VALUES('${ID_proveedor}', '${RFC}', '${telefono}','${nombre}')`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

//CRUD PARA CLIENTE
router.get("/getCliente", async (req, res) => {
  sql = "select * from Cliente";

  let result = await BD.Open(sql, [], true);
  Cliente = [];

  result.rows.map((cliente) => {
    let clienteSchema = {
      ID_cliente: cliente[0],
      RFC: cliente[1],
      direccion: cliente[2],
      nombre : cliente[3],
    };
    Cliente.push(clienteSchema);
  });
  //console.log(Orders);
  res.json(Cliente);
});

router.delete("/deleteCliente", async (req, res) => {
  let id = req.body.ID_cliente;
  sql = `DELETE * FROM Cliente WHERE ID_cliente = '${id}'`;
  let result = await BD.Open(sql, [], true);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.put("/updateCliente", async (req, res) => {
  let ID_cliente = req.body.ID_cliente;
  let RFC = req.body.RFC;
  let direccion = req.body.direccion;
  let nombre = req.body.nombre;

  sql = `UPDATE Cliente SET RFC = '${RFC}', direccion = '${direccion}', nombre = '${nombre}' WHERE ID_cliente = '${ID_cliente}'`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.post("/addProveedor", async (req, res) => {
  let ID_cliente = req.body.ID_cliente;
  let RFC = req.body.RFC;
  let direccion = req.body.direccion;
  let nombre = req.body.nombre;

  sql = `INSERT INTO Proveedor VALUES('${ID_cliente}', '${RFC}', '${direccion}','${nombre}')`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

//CRUD PARA VENDEDOR
router.get("/getVendedor", async (req, res) => {
  sql = "select * from Vendedor";

  let result = await BD.Open(sql, [], true);
  Vendedor = [];

  result.rows.map((vendedor) => {
    let vendedorSchema = {
      ID_vendedor: vendedor[0],
      nombre : cliente[1]
    };
    Vendedor.push(vendedorSchema);
  });
  //console.log(Orders);
  res.json(Vendedor);
});

router.delete("/deletVendedor", async (req, res) => {
  let id = req.body.ID_vendedor;
  sql = `DELETE * FROM Vendedor WHERE ID_vendedor = '${id}'`;
  let result = await BD.Open(sql, [], true);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.put("/updateVendedor", async (req, res) => {
  let ID_vendedor = req.body.ID_vendedor;
  let nombre = req.body.nombre;

  sql = `UPDATE Vendedor SET nombre = '${nombre}' WHERE ID_cliente = '${ID_vendedor}'`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.post("/addVendedor", async (req, res) => {
  let ID_vendedor = req.body.ID_vendedor;
  let nombre = req.body.nombre;

  sql = `INSER INTO Vendedor VALUES('${ID_vendedor}','${nombre}'`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

//CRUD PARA PRODUCTO
router.get("/getProducto", async (req, res) => {
  sql = "select * from Producto";

  let result = await BD.Open(sql, [], true);
  Producto = [];

  result.rows.map((producto) => {
    let productoSchema = {
      ID_producto: producto[0],
      nombre : producto[1],
      cantidad : producto[2]
    };
    Producto.push(productoSchema);
  });
  //console.log(Orders);
  res.json(Producto);
});

router.delete("/deleteProducto", async (req, res) => {
  let id = req.body.ID_producto;
  sql = `DELETE * FROM Producto WHERE ID_producto = '${id}'`;
  let result = await BD.Open(sql, [], true);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.put("/updateProducto", async (req, res) => {
  let ID_producto = req.body.ID_producto;
  let nombre = req.body.nombre;
  let cantidad = req.body.cantidad

  sql = `UPDATE Producto SET nombre = '${nombre}', cantidad = '${cantidad}'WHERE ID_producto = '${ID_producto}'`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.post("/addProducto", async (req, res) => {
  let ID_producto = req.body.ID_producto;
  let nombre = req.body.nombre;

  sql = `INSER INTO Vendedor VALUES('${ID_producto}','${nombre}'`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

//CRUD PARA VEHICULO
router.get("/getVehiculo", async (req, res) => {
  sql = "select * from Vehiculo";

  let result = await BD.Open(sql, [], true);
  Vehiculos = [];

  result.rows.map((vehiculo) => {
    let vehiculoSchema = {
      ID_vehiculo: vehiculo[0],
      modelo : vehiculo[1],
      marca : vehiculo[2]
    };
    Vehiculos.push(vehiculoSchema);
  });
  //console.log(Orders);
  res.json(Vehiculos);
});

router.delete("/deleteVehiculo", async (req, res) => {
  let id = req.body.ID_vehiculo;
  sql = `DELETE * FROM Vehiculo WHERE ID_vehiculo = '${id}'`;
  let result = await BD.Open(sql, [], true);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.put("/updateVehiculo", async (req, res) => {
  let ID_vehiculo = req.body.ID_vehiculo;
  let modelo = req.body.modelo;
  let marca = req.body.marca;

  sql = `UPDATE Vehiculo SET modelo = '${modelo}', marca = '${marca}' WHERE ID_vehiculo = '${ID_vehiculo}'`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});

router.post("/addVehiculo", async (req, res) => {
  let ID_vehiculo = req.body.ID_vehiculo;
  let modelo = req.body.modelo;
  let marca = req.body.marca;

  sql = `INSERT INTO Vehiculo VALUES ('${ID_vehiculo}','${modelo}', '${marca}')`;
  let result = await BD.Open(sql, [], true);
  //console.log(sql); //
  //console.log("Number of rows modified:", result.rowsAffected);
  if (result.rowsAffected >= 1) {
    res.json({
      status: "success",
      message: "Number of rows modified: " + result.rowsAffected,
    });
  } else {
    res.json({
      status: "error",
      message: "An error has occurred",
    });
  }
});


module.exports = router;
