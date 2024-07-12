import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { useState } from "react";
import { COLORS, SIZES } from "../../../constants";
import PopularjobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text> Something went wrong</Text>
        ) : (
          <FlatList
            data={[{ job_id: 1 }, { job_id: 2 }, { job_id: 3 }, { job_id: 4 }]}
            renderItem={({ item }) => <PopularjobCard item={item} />}
            keyExtractor={item => item.job_id.toString()}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
