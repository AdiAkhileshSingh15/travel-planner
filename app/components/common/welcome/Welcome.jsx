import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const activeTabs = ["Community", "Trip"]

const Welcome = ({ welcomeMessage, isHomePage, searchTerm, setSearchTerm, handleClick, activeTab }) => {
    const router = useRouter()

    return (
        <View>

            <View style={styles.container}>
                {isHomePage && <Text style={styles.userName}>Hello Adi</Text>}
                <Text style={styles.welcomeMessage}>{welcomeMessage}</Text>
            </View>

            {!isHomePage && <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}
                        placeholder='Search for communities and trips'
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>}

            <View style={styles.tabsContainer}>
                <FlatList
                    data={activeTabs}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeTab, item)}
                            onPress={() => {
                                router.push(`/${item.toLowerCase()}`)
                            }}
                        >
                            <Text style={styles.tabText(activeTab, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
    )
}

export default Welcome