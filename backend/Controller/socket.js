const io = require("socket.io")(server);

var socketList = [];

// [
//   { _id: 'room01', members: ['zero_id', 'aero_id']},
//   { _id: 'room02', members: ['nero_id', 'hero_id']},
// ]

io.on("connection", socket => {

  var room_id;

  socket.on('joinRoom', roomId => {
    room_id = roomId;
    socket.join(room_id); //룸입장
    console.log('JOIN ROOM LIST', io.sockets.adapter.rooms);
  });

  socket.on('leaveRoom',function(){
    socket.leave(room_id);//룸퇴장
    console.log('OUT ROOM LIST', io.sockets.adapter.rooms);
  });

   socket.on('chat',function(data) {
     console.log(room_id)
    io.sockets.in(room_id).emit('chat',data);//자신포함 전체 룸안의 유저
    //socket.broadcast.to(room_id).emit('msgAlert',data); //자신 제외 룸안의 유저
    //socket.in(room_id).emit('msgAlert',data); //broadcast 동일하게 가능 자신 제외 룸안의 유저
    //io.of('namespace').in(room_id).emit('msgAlert', data) //of 지정된 name space의 유저의 룸
  });

  socket.on('disconnect', function(){
    console.log('NOT USER DISCONNECT : ', socket.id);
    console.log('ROOM LIST', io.sockets.adapter.rooms);
  });


  // //socketList.push(socket);
  // socket.join('room1');

  // socket.on("chat", function (data) {

  //   io.sockets.in('room1').emit('chat', data);

  //   io.sockets.manager.roomClients[socket.id]

  //   socketList.forEach(function (item) {
  //     //item.emit("chat", data);
  //   });
  //});

  // socket.on("disconnect", data => {
  //   //socketList.splice(socketList.indexOf(socket), 1);
  //   socket.leave(방의 아이디);
  // });
});