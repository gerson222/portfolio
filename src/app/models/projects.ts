export interface Project {
  title: string;
  content: string;
  buttonUrl: string;
}

export const projects: Project[] = [
  {
    title: 'Awesome Project',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet vestibulum mauris. Proin at libero quis diam auctor tincidunt. Nam id nisl ligula. Duis vitae felis elementum, venenatis turpis eget, sagittis enim. Sed viverra sagittis condimentum.',
    buttonUrl: '#project1',
  },
  {
    title: 'Creative Endeavor',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam tincidunt tortor ligula, eget semper tellus placerat vitae. Aliquam consectetur nibh in augue tristique pulvinar. Vestibulum eget quam eu ex consequat rhoncus. Sed suscipit mi in libero fermentum, a tincidunt erat varius.',
    buttonUrl: '#project2',
  },
  {
    title: 'Innovative Solution',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum felis et leo aliquam, id pulvinar lectus fermentum. Ut sed libero a enim venenatis eleifend. Aliquam non ex nec velit rutrum tempus. Aenean vestibulum massa eu neque pulvinar, a eleifend ex cursus. Vivamus malesuada elit vel mauris dapibus, et rutrum neque interdum.',
    buttonUrl: '#project3',
  },
  {
    title: 'Exciting Venture',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue orci vitae aliquet congue. Nullam eleifend leo vitae est sagittis, vitae fringilla turpis venenatis. Nulla in lacinia justo. Aliquam erat volutpat. Pellentesque hendrerit justo odio, id feugiat tellus fringilla nec. Vivamus ac leo sem.',
    buttonUrl: '#project4',
  },
];
