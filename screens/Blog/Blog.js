import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

import WebView from 'react-native-webview';
import { COLORS, SIZES } from '../../constants';


const Blog = (props) => {
    const [loading, setLoading] = React.useState(false);
    const htmlContent = props.route.params?.selectedItem?.htmlContent;

    const ActivityIndicatorElement = () => {
        return (
            <View style={[styles.activityIndicatorStyle]}>
                <ActivityIndicator size="large" color={COLORS.VIEW.primary} />
            </View>
        )
    }
    return (
        <>
        <View style={styles.container}>
            <>
                <WebView
                    source={{
                        uri: htmlContent
                    }}
                    style={{ flex: 1 }}
                    onLoadStart={() => {
                        setLoading(true);
                    }}
                    onLoad={() => {
                        setLoading(false);

                    }}
                />

            </>
        </View>
        {loading ? <ActivityIndicatorElement /> : null}
        </> 
    )
}

export default Blog;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.VIEW.busy,
        flex: 1,
      },
      activityIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
      },
  });
