import React, {useState} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';

import {UseInfiniteQueryResult} from '@tanstack/react-query';
import {APP_PRIMARY_COLOR} from '../../themes/Colors';
import EmptyComponent from '../EmptyView';
import SpinnerLoader from '../SmallLoader';
function defaultKeyExtractor(item: any) {
  return `${item.id}`;
}

type FlatListHandlerPropType = {
  data?: Array<any>;
  loading: boolean;
  isLoading: boolean;
  listEmptyText?: string;
  shouldFetchMore?: boolean;
  horizontal?: boolean;
  meta: UseInfiniteQueryResult;
  renderItem?: ListRenderItem<any>;
  HeaderComponent?: React.ReactNode;
  footerLoadingCondition?: boolean;
  keyExtractor?: (a: any) => string;
  skeletenComponent?: any;
  ListHeaderComponent?: any;
  ListFooterComponent?: any;
  notificationComponent?: any;
  contentContainerStyle?: any;
  ItemSeparatorComponent?: any;
  noAddress?: any;
  emptyCustomComponent?: any;
};

export default function FlatListHandler(props: FlatListHandlerPropType) {
  const {
    data,
    meta,
    isLoading,
    renderItem,
    HeaderComponent,
    ListHeaderComponent,
    listEmptyText,
    shouldFetchMore = true,
    footerLoadingCondition = false,
    keyExtractor = defaultKeyExtractor,
    skeletenComponent,
    notificationComponent,
    noAddress,
    contentContainerStyle,
    horizontal,
    ItemSeparatorComponent,
    emptyCustomComponent,
  } = props;

  const [isRefreshing, setIsRefreshing] = useState(false);
  const fetchMore = () => {
    const {hasNextPage, isFetchingNextPage, fetchNextPage} = meta;
    if (shouldFetchMore && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  function onRefresh() {
    setIsRefreshing(true);
    meta.refetch().finally(() => {
      setIsRefreshing(false);
    });
  }

  return (
    <FlatList
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      extraData={isRefreshing}
      HeaderComponent={HeaderComponent}
      ListHeaderComponent={ListHeaderComponent}
      {...props}
      {...(listEmptyText && {
        ListEmptyComponent: () =>
          isLoading ? (
            skeletenComponent
          ) : emptyCustomComponent ? (
            emptyCustomComponent
          ) : (
            <EmptyComponent title={listEmptyText} />
          ),
      })}
      {...(meta && {
        refreshControl: (
          <RefreshControl
            title=""
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            tintColor={APP_PRIMARY_COLOR}
          />
        ),
        onRefresh: onRefresh,
        refreshing: isRefreshing,
        onEndReached: fetchMore,
        onEndReachedThreshold: 0.2,
        ListFooterComponent: () =>
          footerLoadingCondition || meta.isFetchingNextPage ? (
            <SpinnerLoader size="small" />
          ) : null,
      })}
    />
  );
}
