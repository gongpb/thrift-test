namespace java  com.funshion.thrift
namespace js com.funshion.thrift
struct User {
  1: i32 uid,
  2: string name,
  3: i16 age,
  4: string desc
}

service UserService {
  string add(1: User user),
  string addStr(1: string user),
  User get(1: i32 uid),
  void hello1()
}