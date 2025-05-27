function App() {

  // Task 1

  // jsx is a syntax extension to javascript that helps developers build better,
  //  more reliable, and more quality websites. It's a good add-on

  // Task 2

  // Unlike a regular domain, a virtual domain does not refresh the entire site. A virtual domain is a 
  // clone of a domain, and after making a small change, the virtual domain compares the site before the change 
  // and the site after the change to understand the change that occurred on the site. Then it sends this change 
  // to the domain using useState and the change is made by updating the specific place where the 
  // change occurred, and not by refreshing the entire site.


  // Task 3

  const nameList = ["gabriel", "luka", "nika", "giorgi"]
  const result = nameList.map((el, i) => (
    <li key={`person${i}`}>{el}</li>
  ))

  return result;


}

export default App
