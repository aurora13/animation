import React, { Component } from 'react';
import { View } from './View';
import { DriverShape } from '../drivers/DriverShape';
/*
 * Rotate Component adds rotation effect to its children components.
 * Connect it to driver and pass the input range to animate it.
 * e.g.:
 * ...
 * const driver = new ScrollDriver();
 *
 * return (
 *  <ScrollView
 *    {...driver.scrollViewProps}
 *  >
 *    <Rotate
 *      driver={driver}
 *      inputRange={[100,150]}
 *      angle="180deg"
 *    >
 *      <Image />
 *    </Rotate>
 *  </ScrollView>
 * );
 *
 * ...
 * Above code will create scroll dependent rotation of an Image by 180 degrees
 */
export class Rotate extends Component {
  static propTypes = {
    /**
     * An instance of animation driver, usually ScrollDriver
     */
    driver: DriverShape.isRequired,
    /**
     * Components to which an effect will be applied
     */
    children: React.PropTypes.node,
    /**
     * pair of [start, end] values from animation driver, how
     * children would rotate by an angle in dimension
     */
    inputRange: React.PropTypes.array,
    /**
     * rotation angle
     */
    angle: React.PropTypes.string,
    /**
     * dimension of rotation axis (x, y, z), z is default
     */
    dimension: React.PropTypes.string,
    style: React.PropTypes.object,
  };

  render() {
    const {
      driver,
      children,
      inputRange = [0, 1],
      angle = '360deg',
      dimension,
      style
    } = this.props;

    return (
      <View
        driver={driver}
        animationName="rotate"
        animationOptions={{ inputRange, angle, dimension }}
        style={style}
      >
        {children}
      </View>
    );
  }
}