import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styles from './styleapp.js'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <View style={styles.a1}>
          <View style={styles.a11}>
            <Image style={{ marginTop: 20, marginLeft: 15 }}
              source={require('./assets/img/arrow.png')}
            />
          </View>
          <View style={styles.a12}></View>
          <View style={styles.a11}>
            <Image style={{ width: 50, height: 60, borderRadius: 10, margin: 5 }}
              source={require('./assets/img/grl1.jpg')}
            />
          </View>
        </View>
        <View style={styles.a2}>
          <View style={styles.a21}>

            <Image style={{ width: 60, height: 60, borderRadius: 45, }}
              source={require('./assets/img/drive.png')}
            />

          </View>
          <View style={styles.a22}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>
              Google Drive</Text>
            <Text>Storage</Text>
            <Image style={{ width: 100, height: 40 }}
              source={require('./assets/img/bar1.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.two}>
        <Text style={{ fontSize: 30, marginLeft: 20, color: 'white', fontWeight: '100', marginTop: 30 }}>
          Folders
            </Text>
        <View style={styles.t1}>
          <ScrollView horizontal>
            <View style={styles.t11}>
              <View style={styles.t12}>
                <Image style={{ marginLeft: 12, marginTop: 5 }}
                  source={require('./assets/img/fol.png')}

                />

              </View>
              <Text style={{ marginTop: -28, marginLeft: 50, color: 'white', fontWeight: 'bold' }}> My Drive</Text>
              <Image style={{ width: 60, height: 50, marginTop: 15, marginLeft: 25, borderRadius: 5 }}
                source={require('./assets/img/app.jpg')}
              />

              <Image style={{ width: 60, height: 50, marginTop: -50, marginLeft: 95, borderRadius: 5 }}
                source={require('./assets/img/diamond.jpg')}
              />
            </View>
            <View style={styles.t11}>
              <View style={styles.t12}>
                <Image style={{ marginLeft: 12, marginTop: 5 }}
                  source={require('./assets/img/fol.png')}

                />

              </View>
              <Text style={{ marginTop: -28, marginLeft: 50, color: 'white', fontWeight: 'bold' }}>Clain of File</Text>
              <Image style={{ width: 60, height: 50, marginTop: 15, marginLeft: 25, borderRadius: 5 }}
                source={require('./assets/img/app.jpg')}
              />

              <Image style={{ width: 60, height: 50, marginTop: -50, marginLeft: 95, borderRadius: 5 }}
                source={require('./assets/img/diamond.jpg')}
              />
            </View>
          </ScrollView>

        </View>
        <Text style={{ fontSize: 30, marginLeft: 20, color: 'white', fontWeight: '100', }}>Files</Text>
        <View style={styles.t13}>
          <View style={styles.t131}>
            <Image style={{ width: 80, height: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              source={require('./assets/img/app.jpg')}
            />
            <Text style={{ color: 'white', marginLeft: 15, marginBottom: 10 }}>Pictures</Text>
          </View>
          <View style={styles.t131}>
            <Image style={{ width: 80, height: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              source={require('./assets/img/diamond.jpg')}
            />
            <Text style={{ color: 'white', marginLeft: 18 }}>Photos</Text>
          </View>
          <View style={styles.t131}>
            <Image style={{ width: 80, height: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              source={require('./assets/img/app.jpg')}
            />
            <Text style={{ color: 'white', marginLeft: 24 }}>Files</Text>
          </View>
        </View>
        <View style={styles.t14}>
          <View style={styles.t141}>
            <Image style={{ margin: 15 }}
              source={require('./assets/img/file1.png')}
            />
          </View>
          <View style={styles.t142}>
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10, marginLeft: 5 }}>Running Work on PDF</Text>
            <Text style={{ color: 'white', marginLeft: 5 }}>Dropbox/project/C:/class</Text>
          </View>
          <View style={styles.t143}>
            <Image style={{ margin: 15 }}
              source={require('./assets/img/list.png')}
            />
          </View>
        </View>
        <View style={styles.t15}>
          <View style={styles.t141}>
            <Image style={{ margin: 15 }}
              source={require('./assets/img/file1.png')}
            />
          </View>
          <View style={styles.t142}>
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10, marginLeft: 5 }}>Claint Work on PDF</Text>
            <Text style={{ color: 'white', marginLeft: 5 }}>Dropbox/project/D:/Evening</Text>
          </View>
          <View style={styles.t143}>
            <Image style={{ margin: 15 }}
              source={require('./assets/img/list.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

