import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native';
export default function App() {
  var item=1;
  var price=141800;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', padding: 10, height: '65%', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image source={require('./img/book.png')}></Image>
          <View style={{ flexDirection: 'column', width: '70%', paddingHorizontal: 10, justifyContent: 'space-between', height: '80%' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nguyên hàm tích phân và ứng dụng </Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Cung cấp bởi Tiki Trading </Text>
            <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}>{price*item} đ</Text>
            <Text style={{ fontSize: 16, color: 'rgba(60,0,0,0.4)', fontWeight: 'bold', textDecorationLine: 'line-through' }}>141.800 đ</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '80%', flexDirection: 'row' }}>
                <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: 24 }}>
                  <Entypo name="plus" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ width: 50, textAlign: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>1</Text>
                <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: 24 }}>
                  <Entypo name="minus" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={{ color: '#134FEC', fontWeight: 'bold', fontSize: 16 }}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: -10 }}>
          <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>Mã giảm giá ưu đãi</Text>
          <Text style={{ paddingLeft: 15, color: '#134FEC', fontWeight: 'bold' }}>Xem tại đây</Text>
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: '50%', height: 50 }}>
            <Text style={{ width: 30, backgroundColor: '#F2DD1B', height: 20 }}></Text>
            <Text style={{ paddingLeft: 15, color: '#134FEC', fontWeight: 'bold', fontSize: 22 }}>Mã giảm giá</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#0A5EB7', padding: 15, flexDirection: 'row' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>Áp dụng</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.center1}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{ color: '#134FEC', fontWeight: 'bold', fontSize: 16 }}>Nhập tại đây</Text>
        </View>
      </View>
      <View style={styles.center2}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding:20, width: '100%' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Tạm tính</Text>
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 25 }}>141.800 đ</Text>
        </View>
      </View>
      <View style={styles.footer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding:20, width: '100%' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Thành tiền</Text>
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 25 }}>141.800 đ</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: 'red', padding: 15, flexDirection: 'row', justifyContent:'center',width:'90%'}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff',textTransform:'uppercase'}}>Tiến hành đặt hàng</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    backgroundColor: '#e6e6fa',
  },
  header: {
    height: '40%',
    backgroundColor: '#fff',
  },
  center1: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    marginTop: 20
  },
  center2: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    marginTop: 20

  },
  footer: {
   marginTop:115,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    height:'20%'
  },
});
