import React from 'react';
import {StyleSheet,Text,View,Platform} from 'react-native';

const Cotizacion = ({resultado}) => {
  if(Object.keys(resultado).length === 0) return null
    return (
      <View style={styles.resultado}>
        <Text style={styles.texto}>
          <Text style={[styles.texto, styles.precio]}>{resultado.PRICE}</Text>
        </Text>

        <Text style={styles.texto}>Precio más alto del día: {' '}
          <Text style={styles.span}>{resultado.HIGHDAY}</Text>
        </Text>

        <Text style={styles.texto}>Precio más bajo del día: {' '}
          <Text style={styles.span}>{resultado.LOWDAY}</Text>
        </Text>

        <Text style={styles.texto}>Variacion últimas 24hs: {' '}
          <Text style={styles.span}>{resultado.CHANGEPCT24HOUR}%</Text>
        </Text>

        <Text style={styles.texto}>Última actualización: {' '}
          <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  resultado:{
    backgroundColor: '#2E4053',
    padding: 20,
    margin: 10,
    borderRadius: 10
  },
  texto:{
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  precio:{
    fontSize: 38
  },
  span:{
    fontFamily: 'Lato-Black',
  },
});

export default Cotizacion;