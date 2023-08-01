package employeedaoimp;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import dbhandler.DbHandler;
import employeedao.EmployeeDao;
import model.EmpPersonalDetails;
import model.Employee;

//interface implementation
public class EmployeeDaoImp implements EmployeeDao {

    @Override
    public void create(Employee employee) {
        try (Connection conn = DbHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO admin(id, fullname, designation, salary, role, email, pw, empid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")) {

            ps.setInt(1, employee.getId());
            ps.setString(2, employee.getFullname());
            ps.setString(3, employee.getDesignation());
            ps.setDouble(4, employee.getSalary());
            ps.setString(5, employee.getRole());
            ps.setString(6, employee.getEmail());
            ps.setString(7, employee.getPw());
            ps.setInt(8, employee.getEmpid());

            int rows = ps.executeUpdate();
            System.out.println(rows + " row(s) inserted.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Employee> readAll() {
        List<Employee> employees = new ArrayList<>();
        try (Connection conn = DbHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM admin");
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Employee employee = new Employee();
                employee.setId(rs.getInt("id"));
                employee.setFullname(rs.getString("fullname"));
                employee.setDesignation(rs.getString("designation"));
                employee.setSalary(rs.getDouble("salary"));
                employee.setRole(rs.getString("role"));
                employee.setEmail(rs.getString("email"));
                employee.setPw(rs.getString("pw"));
                employee.setEmpid(rs.getInt("empid"));
                employees.add(employee);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return employees;
    }

    @Override
    public Employee read(int id) {
        Employee employee = null;
        try (Connection conn = DbHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM admin WHERE id = ?")) {

            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                employee = new Employee();
                employee.setId(rs.getInt("id"));
                employee.setFullname(rs.getString("fullname"));
                employee.setDesignation(rs.getString("designation"));
                employee.setSalary(rs.getDouble("salary"));
                employee.setRole(rs.getString("role"));
                employee.setEmail(rs.getString("email"));
                employee.setPw(rs.getString("pw"));
                employee.setEmpid(rs.getInt("empid"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return employee;
    }

    @Override
    public void update(Employee employee) {
        try (Connection conn = DbHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(
                     "UPDATE admin SET fullname = ?, designation = ?, salary = ?, role = ?, email = ?, pw = ?, empid = ? WHERE id = ?")) {

            ps.setString(1, employee.getFullname());
            ps.setString(2, employee.getDesignation());
            ps.setDouble(3, employee.getSalary());
            ps.setString(4, employee.getRole());
            ps.setString(5, employee.getEmail());
            ps.setString(6, employee.getPw());
            ps.setInt(7, employee.getEmpid());
            ps.setInt(8, employee.getId());

            int rows = ps.executeUpdate();
            System.out.println(rows + " row(s) updated.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(int id) {
        try (Connection conn = DbHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement("DELETE FROM admin WHERE id = ?")) {

            ps.setInt(1, id);

            int rows = ps.executeUpdate();
            System.out.println(rows + " row(s) deleted.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    @Override
    public void createDetails(EmpPersonalDetails ed) {
        try (Connection conn = DbHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO details(eid, branch, increament,age,fullname,designation,salary,role,email,pw) VALUES (?, ?, ?, ?,?,?,?,?,?,?)")) {

            ps.setInt(1, ed.getEid());
            ps.setString(2, ed.getBranch());
            ps.setDouble(3, ed.getIncreament());
            ps.setInt(4, ed.getAge());
            ps.setString(5,ed.getFullname());
            ps.setString(6, ed.getDesignation());
            ps.setDouble(7, ed.getSalary());
            ps.setString(8, ed.getRole());
            ps.setString(9,ed.getEmail());
            ps.setString(10, ed.getPw());

            int rows = ps.executeUpdate();
            System.out.println(rows + " row(s) inserted.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    @Override
    public Employee read(String fullname) {
        Employee employee = null;
        try (Connection conn = DbHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM admin WHERE fullname = ?")) {

            ps.setString(1, fullname);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                employee = new Employee();
                employee.setId(rs.getInt("id"));
                employee.setFullname(rs.getString("fullname"));
                employee.setDesignation(rs.getString("designation"));
                employee.setSalary(rs.getDouble("salary"));
                employee.setRole(rs.getString("role"));
                employee.setEmail(rs.getString("email"));
                employee.setPw(rs.getString("pw"));
                employee.setEmpid(rs.getInt("empid"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return employee;
    }
}
