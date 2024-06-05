interface Author {
  name: string;
  writeBook: (title: string) => boolean;
}

const author: Author = {
  name: 'agatha christie',
  writeBook: (title) => { return false; },
};

const higherOrderFunc = (callback: (num: number) => string): () => boolean => {
  return () => { return true };
};

higherOrderFunc((num) => { return "hello" });
