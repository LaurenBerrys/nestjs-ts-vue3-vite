import { ref, ComputedRef, unref, computed, watch } from 'vue';
import type { NvapTableProps } from '../types/table';

export function useLoading(props: ComputedRef<NvapTableProps>) {
  const loadingRef = ref(unref(props).loading);

  watch(
    () => unref(props).loading,
    (loading) => {
      loadingRef.value = loading;
    }
  );

  const getLoading = computed(() => unref(loadingRef));

  function setLoading(loading: boolean) {
    loadingRef.value = loading;
  }

  return { getLoading, setLoading };
}
