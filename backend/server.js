const app = require("express")();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", function (req, res) {
  res.sendFile("Hellow Chating App Server");
});

app.get("/login", async (req, res, next) => {
  login(req, res);
});

io.on("connection", socket => {

  var room_id;

  socket.on('joinRoom', roomId => {
    room_id = roomId;
    socket.join(roomId); //룸입장
    //console.log('JOIN ROOM LIST', io.sockets.adapter.rooms);
  });

  socket.on('leaveRoom',roomId => {
    socket.leave(roomId);//룸퇴장
    console.log('OUT ROOM LIST', io.sockets.adapter.rooms);
  });


  socket.on('notice',function(data) {
    io.sockets.in(room_id).emit('notice',data);
  });

  socket.on('chat',function(data) {
    io.sockets.in(room_id).emit('chat',data);//자신포함 전체 룸안의 유저
    //socket.broadcast.to(room_id).emit('msgAlert',data); //자신 제외 룸안의 유저
    //socket.in(room_id).emit('msgAlert',data); //broadcast 동일하게 가능 자신 제외 룸안의 유저
    //io.of('namespace').in(room_id).emit('msgAlert', data) //of 지정된 name space의 유저의 룸
  });

  socket.on('disconnect', function(){
    console.log('NOT USER DISCONNECT : ', socket.id);
    console.log('ROOM LIST', io.sockets.adapter.rooms);
  });
});

server.listen(3000, function () {
  console.log("socket io server listening on port 3000");
});

const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;


async function login(request, response) {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: "",
      password: "",
      host: "",
      database: "",
    });

    const result = await connection.execute(
      ` SELECT USERNAME, EMAIL
        FROM USERS
        WHERE USERID = :userId AND PASSWORD = :password`,
      [`${request.query.userId}`, `${request.query.password}`]
    );

    response.send(result.rows? {userName : result.rows[0].USERNAME, email: result.rows[0].EMAIL}: result.rows);

    return true;
  } catch (error) {
    console.log("접속실패" + error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}