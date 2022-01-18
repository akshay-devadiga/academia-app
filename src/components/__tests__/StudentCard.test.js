import { render, screen } from "@testing-library/react";
import StudentCard from "../StudentCard";
import "@testing-library/jest-dom";
const student = {
    rollNo: 1,
    name: "Ania Rylance",
    primaryPhone: "244-23232-1222",
    about: "RESEARCH AND DEVELOPMENT",
    residentialAddress: "6659 ANNAMARK PARKWAY",
    profilePicture: "https://randomuser.me/api/portraits/men/85.jpg"
};

test("Should render student card component", () => {
    render(<StudentCard {...student} />);
    const studentElement = screen.getByTestId("student-1");
    expect(studentElement).toBeInTheDocument();
  });
  
  test("Should have student roll no", () => {
    render(<StudentCard {...student} />);
    const titleElement = screen.getByTestId("roll-no");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(student.rollNo);
  });

  test('Should have student image', () => {
    render(<StudentCard  {...student}/>);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', student.profilePicture);
    expect(imageElement).toHaveAttribute('alt', 'Student Image');
  });

  test("Should have student name", () => {
    render(<StudentCard {...student} />);
    const titleElement = screen.getByTestId("name");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(student.name);
  });
  
  
  test("Should have student about", () => {
      render(<StudentCard {...student} />);
      const aboutElement = screen.getByTestId("about");
      expect(aboutElement).toBeInTheDocument();
      expect(aboutElement).toHaveTextContent(`${student.about}`);
  });
  
  test("Should have student residential address", () => {
      render(<StudentCard {...student} />);
      const residentialAddressElement = screen.getByTestId("residential-address");
      expect(residentialAddressElement).toBeInTheDocument();
      expect(residentialAddressElement).toHaveTextContent(`${student.residentialAddress}`);
  });
    




  